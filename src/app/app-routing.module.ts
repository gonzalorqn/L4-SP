import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TableComponent } from './pages/table/table.component';
import { CargaProductosComponent } from './pages/carga-productos/carga-productos.component';
import { CargaLocalesComponent } from './pages/carga-locales/carga-locales.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { AuthGuard } from './guards/auth.guard';
import { DescargasComponent } from './pages/descargas/descargas.component';


const routes: Routes = [
  {
    path: '', component: TableComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [AuthLoginGuard]
  },
  {
    path: 'signup', component: SignupComponent, canActivate: [AuthLoginGuard]
  },
  {
    path: 'carga-productos', component: CargaProductosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'carga-locales', component: CargaLocalesComponent, canActivate: [AuthGuard]
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
