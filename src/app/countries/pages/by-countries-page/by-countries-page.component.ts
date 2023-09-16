import { Component } from '@angular/core';
import { CountriesService } from '../../Services/countries.service';
import { Countries } from '../../interfaces/countri';

@Component({
  selector: 'app-by-countries-page',
  templateUrl: './by-countries-page.component.html',
  styleUrls: ['./by-countries-page.component.css']
})
export class ByCountriesPageComponent {
 public country: Countries[]=[];
  constructor(private contriesServices: CountriesService){}

  showCountries(term: string){
    this.contriesServices.SerachCountries(term).subscribe(response=>{
      this.country= response;
    });
  }
}
