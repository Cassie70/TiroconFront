import { Routes } from '@angular/router';
import { Index } from './pages/index/index';
import { Registro } from './pages/registro/registro';
import {Competencia} from './pages/competencia/competencia';
import { Entrenamiento } from './pages/entrenamiento/entrenamiento';
import {Arco} from './pages/arco/arco';
import {Invitar} from './pages/invitar/invitar';
import {InfoArquero} from './pages/info-arquero/info-arquero';
import {EditarArquero} from './pages/editar-arquero/editar-arquero'; 


export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: Index},
  {path: 'registro', component: Registro},
  {path: 'competencia/:idArquero', component: Competencia},
  {path: 'entrenamiento/:idArquero', component: Entrenamiento},
  {path: 'arco/:idArquero', component: Arco},
  {path: 'invitar', component: Invitar},
  {path: 'info-arquero/:idArquero', component: InfoArquero},
  {path: 'editar-arquero/idArquero', component: EditarArquero} //queda pendiente agregar el idArquero

];
