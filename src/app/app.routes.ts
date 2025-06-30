import { Routes } from '@angular/router';
import { Index } from './pages/index/index';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: Index},
  {path: 'registro', component: Registro}
];
