import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  @Input()
  public countries: Country[] = [];

  constructor(public countriesService: CountriesService) {}

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
