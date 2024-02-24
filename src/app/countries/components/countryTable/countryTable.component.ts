import { Component, Input, OnInit, input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './countryTable.component.html',
  styleUrls: ['./countryTable.component.css']
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = []

}
