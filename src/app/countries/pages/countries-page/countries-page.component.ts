import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../Services/countries.service';
import { switchMap } from 'rxjs';
import { Countries } from '../../interfaces/countri';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent implements OnInit {
  public country?: Countries;

  constructor(private activateRouter: ActivatedRoute, 
    private countryService: CountriesService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activateRouter.params
    .pipe(
      switchMap(({id})=>this.countryService.SearchCodeCountrie(id)),
      )
    
      .subscribe(
        response => {
          if(!response) return this.router.navigateByUrl('');
          
          return this.country=response;
        // return;
        }
      );
  }

}
