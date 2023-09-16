import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/page/home/home.component';
import { AboutPageComponent } from './shared/page/about-page/about-page.component';
import { ContacComponent } from './shared/page/contac/contac.component';

const router: Routes=[
    {
        path:'home',
        component : HomeComponent
    },
    {
        path:'about',
        component:AboutPageComponent
    },
    {
        path:'contac',
        component: ContacComponent
    },
    {
        path:'countries',
        loadChildren:()=> import ('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
        path:'**',
        redirectTo:'countries/by-capital'
    }
]
@NgModule({
    imports: [
        // Primer modulo 
        RouterModule.forRoot(router)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
