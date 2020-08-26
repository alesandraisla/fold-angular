import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router, NavigationEnd} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ObrasComponent } from './obras/obras.component';
import { ObraInternaComponent } from './obra-interna/obra-interna.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'obras', component: ObrasComponent},
  {path: 'obra-interna', component: ObraInternaComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
