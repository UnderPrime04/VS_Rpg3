import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DogmasComponent } from './dogmas/dogmas.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { VisaoComponent } from './visao/visao.component';
import { PagPricipalComponent } from './pag-pricipal/pag-pricipal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    SobreNosComponent,
    DogmasComponent,
    ObjetivoComponent,
    VisaoComponent,
    PagPricipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
