import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; 
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';


registerLocaleData(localePt);

bootstrapApplication(AppComponent, {
  ...appConfig, 
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ...appConfig.providers, 
    provideHttpClient() 
  ]
})
  .catch((err) => console.error(err));
