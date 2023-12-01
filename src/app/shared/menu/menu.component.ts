import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  MenuItems = [
    {
      name: 'Home',
      cName: 'menu-item',
      icone: '../../assets/icones/menu/home-icon.png',
      subItems: [
        { label: 'Home', link: '/home' },
        { label: 'Novidades', link: '/news' },
        { label: 'Dashboard', link: '/dashboard' },
      ],
    },
    {
      name: 'Cadastros',
      cName: 'menu-item',
      icone: '../../assets/icones/menu/users-icon.png',
      subItems: [
        { label: 'Usuário', link: '/create-user' },
        { label: 'Listar Usuários', link: '/list-user' },
        { label: 'Aluno', link: '/student' },
        { label: 'Instrutor', link: '/instructor' },
      ],
    },
    {
      name: 'Agendas',
      cName: 'menu-item',
      icone: '../../assets/icones/menu/schedule.png',
      subItems: [
        { label: 'Nova Agenda', link: '/new-schedule' },
        { label: 'Agenda por Aluno', link: '/agenda-by-student' },
        { label: 'Agenda por Instrutor', link: '/agenda-by-instructor' },
      ],
    },
    {
      name: 'Carros',
      cName: 'menu-item',
      icone: '../../assets/icones/menu/schedule.png',
      subItems: [
        { label: 'Novo carro', link: '/new-car' },
        { label: 'Listar carros', link: '/list-car' },
      ],
    },
  ];

  selectedItem: string | null = null;

  showSubMenu(itemName: string): void {
    if (this.selectedItem === itemName) {
      // Se o item do menu já estiver selecionado, esconde os subitens
      this.selectedItem = null;
    } else {
      // Caso contrário, mostra os subitens do item clicado
      this.selectedItem = itemName;
    }
  }

  get username(): string {
    return localStorage.getItem('username') || ''; // Obter o nome do usuário do localStorage
  }
  get group(): string {
    return localStorage.getItem('group') || ''; // Obter o nome do usuário do localStorage
  }
  get active(): string {
    return localStorage.getItem('active') || ''; // Obter o nome do usuário do localStorage
  }
  get avatar(): string {
    return localStorage.getItem('avatar') || ''; // Obter o nome do usuário do localStorage
  }

  constructor(private router: Router) {}

  logout(): void {
    localStorage.clear();
    // Redirecionar para a rota de login
    this.router.navigate(['/login']);
  }
}
