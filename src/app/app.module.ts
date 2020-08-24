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
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
