import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriesPageComponent } from './pages/by-countries-page/by-countries-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriesRoutingModule } from './coutries.routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import {HttpClient} from '@angular/common/http'
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';


@NgModule({
  declarations: [ByCapitalPageComponent, ByCountriesPageComponent, ByRegionPageComponent, CountryTableComponent, CountriesPageComponent],
  imports: [
    CommonModule, CountriesRoutingModule  , SharedModule
  ],
  exports:[
    
  ]
})
export class CountriesModule { }
