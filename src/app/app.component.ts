import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Gustavo'

  userData = {
    email: 'gustavo.tonolli@hotmail.com',
    role: 'Admin'
  }
  
  title = 'projeto-angular';
}
