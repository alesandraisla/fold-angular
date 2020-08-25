import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { AboutComponent } from './home/about/about.component';
import { AboutDigitalComponent } from './home/about-digital/about-digital.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ServicesComponent } from './home/services/services.component';
import { ContactComponent } from './home/contact/contact.component';
import { SobreComponent } from './sobre/sobre.component';
import { ObrasComponent } from './obras/obras.component';
import { ObraInternaComponent } from './obra-interna/obra-interna.component';
import { ServicosComponent } from './servicos/servicos.component';
import { DepoimentoComponent } from './sobre/depoimento/depoimento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    AboutDigitalComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    SobreComponent,
    ObrasComponent,
    ObraInternaComponent,
    ServicosComponent,
    DepoimentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
