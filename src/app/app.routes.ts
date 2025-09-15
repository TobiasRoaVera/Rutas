import { Routes } from '@angular/router';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { AdiosMundoComponent } from './adios-mundo/adios-mundo.component';
export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // 👈 ruta por defecto
    { path: 'inicio', component: HolaMundoComponent },
    { path: 'menu', component: AdiosMundoComponent}
];
