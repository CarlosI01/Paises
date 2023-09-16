import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContacComponent } from './page/contac/contac.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    AboutPageComponent,
    SidebarComponent,
    ContacComponent,
    SearchBoxComponent,
    
  ],

  imports: [
    CommonModule, RouterModule
  ], 
  
  exports: [HomeComponent, AboutPageComponent, SidebarComponent, ContacComponent, SearchBoxComponent
  ]
})
export class SharedModule { }
