import { Component, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../../Services/countries.service';
import { Countries } from '../../interfaces/countri';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  public country: Countries[]=[];

  constructor(private countriService: CountriesService) { }

  

  Show(show: string) {
    this.countriService.SearchCapital(show).subscribe(response => {
      this.country = response;
      // console.log(response);

    })
  }

}
