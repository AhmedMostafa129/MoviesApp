import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { AccountDetailsComponent } from './pages/account-details/account-details';
import { authGuard } from './guards/auth-guard';
import { Section } from './section/section';
import { AboutUs } from './about-us/about-us';
import { MvDetails} from './details/details';
import { Details } from './services/details';
import { Watchlist } from './pages/watchlist/watchlist';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Section },
  { path: 'About', component: AboutUs },
  { path: 'mvDetails/:id', component: MvDetails },
  { path: 'watchlist', component:Watchlist },
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: 'account-details', component: AccountDetailsComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'home' }  // optional fallback
];

