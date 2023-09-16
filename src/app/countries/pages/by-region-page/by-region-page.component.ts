import { Component } from '@angular/core';
import { CountriesService } from '../../Services/countries.service';
import { Countries } from '../../interfaces/countri';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  public country: Countries[]=[];

  constructor(private regionServices: CountriesService){}

  ShowRegion(term: string){
    this.regionServices.SearchRegion(term).subscribe(response=>{
      this.country= response;
    })
  }

}
