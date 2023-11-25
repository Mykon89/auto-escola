import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auto-escola';

  get username(): string {
    return localStorage.getItem('username') || ''; // Obter o nome do usuário do localStorage
  }

  get id_user(): string {
    return localStorage.getItem('id') || ''; // Obter o nome do usuário do localStorage
  }
}
