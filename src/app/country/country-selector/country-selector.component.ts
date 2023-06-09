import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ECountry } from 'src/app/common';
import { ECountryColor } from 'src/app/common';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
})
export class CountrySelectorComponent {
  public country = ECountry;
  public countryColor = ECountryColor;

  countryList = [
    {
      countryCode: ECountry.Pakistan,
      countryName: 'Pakistan',
      colors: {
        primaryColor: this.countryColor.PK,
        secondaryColor: '#fff',
      },
    },
    {
      countryCode: ECountry.China,
      countryName: 'China',
      colors: {
        primaryColor: this.countryColor.CN,
        secondaryColor: '#fff',
      },
      
    },
  ];

  constructor(private router: Router) {}

  handleCountrySelection(country: ECountry): void {
    localStorage.setItem('countryCode', country);
    localStorage.setItem('countryColor', ECountryColor[country]);
    this.router.navigateByUrl(`/country/${country}/ships`);
  }
}
