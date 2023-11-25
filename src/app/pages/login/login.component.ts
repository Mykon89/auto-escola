import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData: { username: string; password: string } = {
    username: '',
    password: '',
  };

  loginError = false; // Variável para controlar o estado de erro de login
  isLoad = false;
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.isLoad = true;
    this.loginError = false;
    const { username, password } = this.formData; // Use 'username' ao invés de 'username' para corresponder ao objeto esperado pelo backend.
    this.authService
      .login(username, password)
      .then((response) => {
        if (response.status === true) {
          localStorage.setItem('username', response.data[0].username); // Salvar o nome do usuário no localStorage
          localStorage.setItem('id_user', response.data[0].id);
          localStorage.setItem('active', response.data[0].active);
          localStorage.setItem('avatar', response.data[0].avatar);
          this.router.navigate(['/home']); // Redirecionar para a página inicial (home) após o login bem-sucedido
        } else {
          this.isLoad = false;
          this.loginError = true;
        }
      })
      .catch((error) => {
        this.isLoad = false;
        console.error('Erro de login:', error);
      });
  }
}
