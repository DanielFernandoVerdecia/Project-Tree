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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderLandingComponent,
    FooterComponent,
    LandingContentComponent,
    DatosLandingComponent,
    NoticiasComponent,
    HistoriasSuperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
