import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: string;
  label: string;
  icon: string;
  class: string;
  routerLink: string;

  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Productos', icon: 'pi pi-fw pi-home', routerLink: "/",},
      {label: 'Cargar local', icon: 'pi pi-fw pi-upload', routerLink: "/carga-locales"},
      {label: 'Cargar producto', icon: 'pi pi-fw pi-upload', routerLink: "/carga-productos"}
    ];

    try {
      const token = localStorage.getItem('token');
      const helper = new JwtHelperService();
      const payload = helper.decodeToken(token);
      this.label = "Logout";
      this.icon = "pi pi-power-off";
      this.class = "ui-menuitem ui-button-danger";
      this.user = payload.name;
      this.routerLink = "/"
    }
    catch (error) {
      this.user = "not logged in";
      this.label = "Login";
      this.icon = "pi pi-sign-in";
      this.class = "ui-menuitem ui-button-success";
      this.routerLink = "/login";
    }
  }

  public log()
  {
    if(this.label === "Logout")
    {
      localStorage.setItem('token', null);
      this.user = "not logged in";
      this.label = "Login";
      this.icon = "pi pi-sign-in";
      this.class = "ui-menuitem ui-button-success";
      this.routerLink = "/login";
    }
  }
}
