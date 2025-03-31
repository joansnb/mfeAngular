import { Component } from '@angular/core';

@Component({
  selector: 'formula-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formula-app';
  activeTab: string = 'inicio'; // Tab activa por defecto  

  selectTab(tab: string) {  
    this.activeTab = tab; // Cambia la pestaña activa  
  }  
}
