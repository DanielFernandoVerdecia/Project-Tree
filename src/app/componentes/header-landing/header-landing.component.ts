import { Component } from '@angular/core';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.css']
})
export class HeaderLandingComponent {


  /*Animaciones Botones Header*/
  ver_anima_integrante_bt = false;

  //Botón integrantes
  animacion_entrada_texto_integrante_btn(){

    this.ver_anima_integrante_bt = false;

  }

  animacion_entrada_icono_integrante_btn(){

    this.ver_anima_integrante_bt = true;

  }
  //Fin Botón integrantes


  //Botón noticias
  ver_anima_icono_noticias = false;

  animacion_activar_icono_noticias() {

    this.ver_anima_icono_noticias = true;

  }

  animacion_desactivar_icono_noticias() {

    this.ver_anima_icono_noticias = false;

  }

  //Fin botón noticias


  //Botón iniciar sesión
  ver_anima_icono_login = false;

  animacion_activar_icono_login() {

    this.ver_anima_icono_login = true;

  }

  animacion_desactivar_icono_login() {

    this.ver_anima_icono_login = false;

  }
  //Fin Botón iniciar sesión


  /*Fin animaciones Botones Header*/


  

}
