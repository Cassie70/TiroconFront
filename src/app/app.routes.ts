import { Routes } from '@angular/router';
import { Index } from './pages/index/index';
import { Registro } from './pages/registro/registro';
import {Competencia} from './pages/competencia/competencia';
import {Arco} from './pages/arco/arco';

export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: Index},
  {path: 'registro', component: Registro},
  {path: 'competencia', component: Competencia},
  {path: 'arco', component: Arco}
];
