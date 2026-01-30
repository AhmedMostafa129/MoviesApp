import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="toast-container">
      <div *ngFor="let toast of toastService.toasts()" 
           class="toast-item"
           [ngClass]="toast.type">
        <div class="toast-content">
          <i class="fas" [ngClass]="{
            'fa-check-circle': toast.type === 'success',
            'fa-exclamation-circle': toast.type === 'error',
            'fa-info-circle': toast.type === 'info'
          }"></i>
          <span>{{ toast.message }}</span>
        </div>
        <button class="close-btn" (click)="toastService.remove(toast.id)">×</button>
      </div>
    </div>
  `,
    styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .toast-item {
      min-width: 300px;
      padding: 16px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      justify-content: space-between;
      animation: slideIn 0.3s ease-out;
      color: #333;
      border-left: 5px solid;
    }

    .toast-content {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 500;
    }

    .toast-content i {
      font-size: 20px;
    }

    /* Types */
    .success {
      border-left-color: #28a745;
    }
    .success i {
      color: #28a745;
    }

    .error {
      border-left-color: #dc3545;
    }
    .error i {
      color: #dc3545;
    }

    .info {
      border-left-color: #17a2b8;
    }
    .info i {
      color: #17a2b8;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #999;
      padding: 0 5px;
    }

    .close-btn:hover {
      color: #333;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class ToastComponent {
    toastService = inject(ToastService);
}
