import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-remote-app';
  activeTab: string = 'inicio'; // Tab activa por defecto  

  selectTab(tab: string) {  
    this.activeTab = tab; // Cambia la pestaña activa  
  }  
}
