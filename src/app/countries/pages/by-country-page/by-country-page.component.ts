import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  @Input()
  public countries: Country[] = [];

  constructor(public countriesService: CountriesService) {}

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries;
    });
  }

}
