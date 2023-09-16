import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountriesPageComponent } from './pages/by-countries-page/by-countries-page.component';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';

export const routes: Routes = [
{
    path:'by-capital',
    component:ByCapitalPageComponent
},
{
    path:'by-region',
    component:ByRegionPageComponent
},
{
    path:'by-countries',
    component:ByCountriesPageComponent
},{
    path:'by/:id',
    component:CountriesPageComponent
}, 
// {
//     path:'**',
//     redirectTo:'by-capital'
// }

]

@NgModule({
    imports: [
            RouterModule.forChild(routes)
    ],
    exports: [

        RouterModule
    ],
   
})
export class CountriesRoutingModule { }
