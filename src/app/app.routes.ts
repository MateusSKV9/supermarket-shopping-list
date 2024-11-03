import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  // { path: '', component: MainComponent }, // Rota padrão
  { path: 'produtos', component: MainComponent }, // Rota para Produtos
];
