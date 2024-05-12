import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login/login.component';
import { RegisterComponent } from './components/pages/register/register/register.component';
import { UserComponent } from './components/pages/user/user/user.component';
import { UserEditComponent } from './components/pages/userEdit/user-edit/user-edit.component';
import { TaskComponent } from './components/pages/task/task/task.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'user/:id/edit', component: UserEditComponent},
    { path: 'user/:id/tasks', component: TaskComponent},
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
