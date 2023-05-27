import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipComponent } from './ship/ship.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';
import { CountryComponent } from './country/country.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { CountryRoutingModule } from './country-routing.module';
import { NgOptimizedImage } from '@angular/common'



@NgModule({
  declarations: [
    ShipComponent,
    ShipDetailComponent,
    CountryComponent,
    CountrySelectorComponent,
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    NgOptimizedImage,

  ]
})
export class CountryModule { }
