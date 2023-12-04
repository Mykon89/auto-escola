import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  // Objeto para o formulário de filtro
  formData: {
    name: string;
    email: string;
    status: string;
    usergroup: string;
    perPage: string;
    cpf: string;
  } = {
    name: '',
    email: '',
    cpf: '',
    status: '6',
    usergroup: '0',
    perPage: '10',
  };

  maxLength: number = 20; // Altere o número para que mostre menos ou mais caracteres em cada campo da tabela
  users: any[] = [];
  totalUsers: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  pagination: number = 1;
  isLoad: boolean = false; // valor padrão para o icone de load.

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.fetchUsers(this.pagination);
  }

  // Método para filtro e paginação
  fetchUsers(pagination: number) {
    this.isLoad = true;
    const { name, email, status, usergroup, cpf, perPage } = this.formData;
    this.api
      .getUsers(name, email, status, usergroup, cpf, pagination, perPage)
      .then(
        (response) => {
          this.users = response.data; // Armazene os usuários na variável 'usuarios'
          this.totalUsers = response.users;
          this.totalPages = response.total_pages;
          this.currentPage = response.current_page;
          this.isLoad = false;
        },
        (error: any) => {
          console.error('Erro ao buscar usuários:', error);
        }
      );
  }

  showUser() {
    alert('apertou eu');
  }

  // método que retorna ... quando atingir o valor do atributo maxLength
  contentLength(content: string): string {
    if (content.length <= this.maxLength) {
      return content;
    } else {
      return content.slice(0, this.maxLength) + '...';
    }
  }
}
