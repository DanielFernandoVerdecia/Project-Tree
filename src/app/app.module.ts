import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { HeaderLandingComponent } from './componentes/header-landing/header-landing.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LandingContentComponent } from './componentes/landing-content/landing-content.component';
import { DatosLandingComponent } from './componentes/datos-landing/datos-landing.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { HistoriasSuperacionComponent } from './componentes/historias-superacion/historias-superacion.component';

//Para usar PrimeNG animaciones
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { ContenidoNoticiasComponent } from './componentes/contenido-noticias/contenido-noticias.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { Ruta404Component } from './componentes/ruta404/ruta404.component';

import {ButtonModule} from 'primeng/button';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderLandingComponent,
    FooterComponent,
    LandingContentComponent,
    DatosLandingComponent,
    NoticiasComponent,
    HistoriasSuperacionComponent,
    ContenidoComponent,
    ContenidoNoticiasComponent,
    LoginComponent,
    CrearCuentaComponent,
    Ruta404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
