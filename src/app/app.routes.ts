import { Routes } from '@angular/router';
import { Index } from './pages/index/index';
import { Registro } from './pages/registro/registro';
import { Entrenamiento } from './pages/entrenamiento/entrenamiento';
import {Competencia} from './pages/competencia/competencia';


export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: Index},
  {path: 'registro', component: Registro}
];
