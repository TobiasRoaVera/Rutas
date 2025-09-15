import { Routes } from '@angular/router';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { AdiosMundoComponent } from './adios-mundo/adios-mundo.component';
import { ProductoComponent } from './producto/producto.component';
export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // 👈 ruta por defecto
    { path: 'inicio', component: HolaMundoComponent },
    { path: 'categorias', component: AdiosMundoComponent},
    { path: 'productos', component: ProductoComponent}
];
