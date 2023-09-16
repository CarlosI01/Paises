import { Component, Input } from '@angular/core';
import { Countries } from '../../interfaces/countri';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {
  @Input()
  public countries:Countries[]=[];
}
