import { Routes } from '@angular/router';
import {BaseLayoutComponent} from '../app/base-layout/base-layout.component'
import { HomePage } from './Paginas/home/home.page';
import { ContactoPage } from './Paginas/contacto/contacto.page';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./Paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path:'app',
    component:BaseLayoutComponent,
    children:[
      { path: 'home', component: HomePage },
      { path: 'contacto', component: ContactoPage },
    ]
  },
  {
    path: 'premios',
    loadComponent: () => import('./Paginas/premios/premios.page').then( m => m.PremiosPage)
  },
  {
    path: 'trivia',
    loadComponent: () => import('./Paginas/trivia/trivia.page').then( m => m.TriviaPage)
  }

];
