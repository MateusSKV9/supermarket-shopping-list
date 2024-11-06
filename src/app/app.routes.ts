import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: MainComponent,
    canActivate: [AuthGuard],
  },
];
