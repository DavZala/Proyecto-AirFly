import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];
