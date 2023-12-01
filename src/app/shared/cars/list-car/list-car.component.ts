import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent {
  // Objeto para o formulário de filtro
  formData: {
    car: string;
    model: string;
    plate: string;
    year_manufacture: string;
    created_by: string;
    perPage: string;
  } = {
    car: '',
    model: '',
    plate: '',
    year_manufacture: '',
    created_by: '0',
    perPage: '10',
  };

  maxLength: number = 20; // Altere o número para que mostre menos ou mais caracteres em cada campo da tabela
  cars: any[] = [];
  totalCars: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  pagination: number = 1;
  isLoad: boolean = false; // valor padrão para o icone de load.


  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.fetchCars(this.pagination);
  }

  fetchCars(pagination: number) {
      this.isLoad = true;
      const { car, model, plate, year_manufacture, created_by, perPage } = this.formData;
      this.api
        .getCars(car, model, plate, year_manufacture, created_by, pagination, perPage)
        .then(
          (response) => {
            this.cars = response.data; // Armazene os usuários na variável 'usuarios'
            this.totalCars = response.users;
            this.totalPages = response.total_pages;
            this.currentPage = response.current_page;
            this.isLoad = false;
          },
          (error: any) => {
            console.error('Erro ao buscar usuários:', error);
          }
        );
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
