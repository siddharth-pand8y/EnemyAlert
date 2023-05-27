import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/common';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent {
  public country = Country;

  constructor(private router: Router) {}

  handleCountrySelection(country: Country): void {
    localStorage.setItem('countryCode', country);
    this.router.navigateByUrl('/country/' + country);
  }
}
