import { Component, ElementRef } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';

// Expressão regular para validar um e-mail
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function emailValidator(control: FormControl): { [key: string]: any } | null {
  const email = control.value;
  if (!email || !emailRegex.test(email)) {
    return { invalidEmail: true };
  }
  return null;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  status = false; // Valor padrão para o switch
  createUserError = false; // Variável para controlar o estado de erro do cadastro de usuário
  createUserSucces = false; // variavel para exibir mensagem de sucesso
  cpfExist = false; // variavel que controla a mensagem de cpf ja cadastrado
  isLoad = false; // variavel que exibe simbolo de loading
  gens = ['Masculino', 'Feminino', 'Outro'];
  selectedGen: string = '';
  userForm: FormGroup;

  //pega o id_user da localstorage para enviar na requisição para registrar quem criou o user
  get id_user(): string {
    return localStorage.getItem('id_user') || ''; // Obter o nome do usuário do localStorage
  }

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpf: [''],
      status: [1],
      name: [''],
      phone: [''],
      email: ['', [Validators.required, emailValidator]],
      age: [0],
      usergroup: ['0'],
      dt_nasc: [''],
      gender: ['0'],
      created_by: [this.id_user], // Inicialize com o valor do id_user
    });
  }

  ngOnInit(): void {}

  // Método chamado quando o formulário é enviado
  submitForm() {
    if (this.userForm.valid) {
      const formData = this.userForm.value; // Obtém os dados do formulário
      console.log('Dados do formulário:', formData); // Exibe os dados do formulário no console

      this.onSubmit();
    }
  }

  onSubmit() {
    this.cpfExist = false;
    this.createUserError = false;
    this.createUserSucces = false;
    this.isLoad = true;

    const formData = this.userForm.value;

    this.apiService
      .createUser(formData)
      .then((response) => {
        if (response.cpf === true) {
          this.cpfExist = true;
        } else if (response.status === true) {
          this.createUserSucces = true;
        } else {
          console.error('Campos não preenchidos, Falha ao cadastrar usuário.'); // Tratar mensagem de erro da API
          this.createUserError = true;
        }
      })
      .catch((error) => {
        console.error('Erro de cadastro:', error);
      })
      .finally(() => {
        this.isLoad = false;
      });
  }
}
