import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DetailVersion1Component } from './detail-version1/detail-version1.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'detailsdisney', component: DetailVersion1Component},
    { path: '**', component: PageNotFoundComponent }
];
