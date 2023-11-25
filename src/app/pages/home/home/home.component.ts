import { Component } from '@angular/core';

type CardData = {
  title: string;
  content: { text: string }[];
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cardsData: CardData[] = [
    {
      title: 'Alunos',
      content: [
        { text: 'Ativos: 100' },
        { text: 'Inativos: 100' },
        { text: 'Concluído: 100' },
        { text: 'Desistentes: 100' },
      ],
    },
    {
      title: 'Instrutores',
      content: [
        { text: 'Ativos: 100' },
        { text: 'Disponíveis: 100' },
        { text: 'Ocupados: 100' },
      ],
    },
    {
      title: 'Agendas',
      content: [
        { text: 'Ativos: 100' },
        { text: 'Disponíveis: 100' },
        { text: 'Ocupados: 100' },
      ],
    },
    {
      title: 'Instrutores disponíveis',
      content: [
        { text: 'Instrutor X' },
        { text: 'Instrutor y' },
        { text: 'Instrutor z' },
      ],
    },
  ];
}
