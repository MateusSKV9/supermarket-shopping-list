import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { MainComponent } from './app/components/main/main.component';

bootstrapApplication(AppComponent, appConfig) // Passa diretamente appConfig
  .catch((err) => console.error(err));