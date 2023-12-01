// importações Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importação de rotas
import { AppRoutingModule } from './app-routing.module';

// Importação bootstrap
import { AppComponent } from './app.component';

// importação da pasta pages
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NewsComponent } from './pages/home/news/news.component';

// importação da pasta shared
import { MenuComponent } from './shared/menu/menu.component';
import { CardComponent } from './shared/card/card.component';
import { CreateUserComponent } from './shared/users/create-user/create-user.component';
import { ListUserComponent } from './shared/users/list-user/list-user.component';
import { CreateScheduleComponent } from './shared/schedules/create-schedule/create-schedule.component';

// Importações Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CreateCarComponent } from './shared/cars/create-car/create-car.component';
import { ListCarComponent } from './shared/cars/list-car/list-car.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    NewsComponent,
    CardComponent,
    CreateUserComponent,
    ListUserComponent,
    CreateScheduleComponent,
    CreateCarComponent,
    ListCarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
