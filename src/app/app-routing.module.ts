import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NewsComponent } from './pages/home/news/news.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateUserComponent } from './shared/users/create-user/create-user.component';
import { ListUserComponent } from './shared/users/list-user/list-user.component';
import { CreateScheduleComponent } from './shared/schedules/create-schedule/create-schedule.component';
import { CreateCarComponent } from './shared/cars/create-car/create-car.component';
import { ListCarComponent } from './shared/cars/list-car/list-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuard] },
  {
    path: 'new-schedule',
    component: CreateScheduleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-car',
    component: CreateCarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list-car',
    component: ListCarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list-user',
    component: ListUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
