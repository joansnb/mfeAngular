import "zone.js";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// This should be implemented in your Angular remote app
export function mount(containerId: string) {
  const containerElement = document.getElementById(containerId);
  if (!containerElement) {
    return;
  }
  
  // Clear the container first
  containerElement.innerHTML = '';
  
  // // Create the Angular component 
  const appElement = document.createElement('formula-app');
  
  // // Append the custom element to the container
  containerElement.appendChild(appElement);
  
  // Bootstrap Angular

  return platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export function unmount(containerId: string) {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    containerElement.innerHTML = '';
  }
}