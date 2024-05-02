import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login/login.component';
import { RegisterComponent } from './components/pages/register/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
