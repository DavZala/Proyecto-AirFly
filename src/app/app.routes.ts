import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DetailVersion1Component } from './detail-version1/detail-version1.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PaneladminComponent } from './paneladmin/paneladmin.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { CrudPaquetesComponent } from './g-paquetes/crud-paquetes/crud-paquetes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    {path: 'login/ingreso', component: IngresoComponent},
   // { path: 'details', component: DetailVersion1Component},
    { path: 'paquetes', component: PaquetesComponent},
    { path: 'paquete/:paqueteId', component: DetailVersion1Component,},
    { path: 'paneladministrador', component: PaneladminComponent},
    { path: 'paneladministrador/:paqueteId', component: CrudPaquetesComponent},
    { path: '**', component: PageNotFoundComponent },
    
];
