import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://gym-dev.com/auto_escola/api';

  isAuthenticated(): boolean {
    const username = localStorage.getItem('username');
    return !!username;
  }

  private inactivityDuration = 30 * 60 * 1000; // 30 minutos em milissegundos
  private inactivityTimeout: any;

  constructor(private http: HttpClient, private router: Router) {
    this.setupInactivityTimer();
  }

  private setupInactivityTimer(): void {
    window.addEventListener('mousemove', () => this.resetInactivityTimer());
    window.addEventListener('keypress', () => this.resetInactivityTimer());

    this.startInactivityTimer();
  }

  private startInactivityTimer(): void {
    this.inactivityTimeout = setTimeout(() => {
      this.logout();
    }, this.inactivityDuration);
  }

  private resetInactivityTimer(): void {
    clearTimeout(this.inactivityTimeout);
    this.startInactivityTimer();
  }

  private stopInactivityTimer(): void {
    clearTimeout(this.inactivityTimeout);
  }

  private logout(): void {
    // Limpar todas as informações de autenticação do localStorage
    localStorage.clear();

    // Redirecionar para a página de login
    this.router.navigate(['/login']);
  }

  login(username: string, password: string): Promise<any> {
    const loginData = { username, password };

    const loginEndpoint = `${this.apiUrl}/login/`;
    return this.http
      .post(loginEndpoint, loginData)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
