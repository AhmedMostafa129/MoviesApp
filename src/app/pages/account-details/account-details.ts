import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { NgClass, CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './account-details.html',
  styleUrl: './account-details.css'
})
export class AccountDetailsComponent {
  private auth = inject(AuthService);
  private toastService = inject(ToastService);

  user = signal(this.auth.getUser());

  name = this.user()?.name ?? '';
  phone = this.user()?.phone ?? '';
  address = this.user()?.address ?? '';
  bio = this.user()?.bio ?? '';
  profileImage = this.user()?.profileImage ?? null; // Store base64 image

  oldPassword = '';      // كلمة السر القديمة
  newPassword = '';      // كلمة السر الجديدة
  showOldPassword = false;
  showNewPassword = false;

  logout() {
    this.auth.logout();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveChanges() {
    const currentUser = this.user();
    if (!currentUser) return;

    let passwordToSave = currentUser.password;
    if (this.oldPassword || this.newPassword) {
      if (this.oldPassword !== currentUser.password) {
        this.toastService.show('Old password is incorrect!', 'error');
        return;
      }

      if (this.newPassword === currentUser.password) {
        this.toastService.show('New password cannot be the same as the old password!', 'error');
        return;
      }

      passwordToSave = this.newPassword;
    }

    const updatedUser = {
      ...currentUser,
      name: this.name,
      phone: this.phone,
      address: this.address,
      bio: this.bio,
      profileImage: this.profileImage, // Save the image
      password: passwordToSave
    };

    try {
      this.auth.updateUser(updatedUser);

      // Update in registeredUsers list as well
      const registered: any[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const index = registered.findIndex(u => u.email === currentUser.email);
      if (index !== -1) {
        registered[index] = updatedUser;
        localStorage.setItem('registeredUsers', JSON.stringify(registered));
      }

      this.user.set(updatedUser); // Update local signal
      this.toastService.show('Your details have been updated successfully!', 'success');
      this.oldPassword = '';
      this.newPassword = '';

    } catch (e: any) {
      console.error(e);
      if (e.name === 'QuotaExceededError') {
        this.toastService.show('Image is too large to save! Please choose a smaller one.', 'error');
      } else {
        this.toastService.show('Failed to save changes.', 'error');
      }
    }
  }
}