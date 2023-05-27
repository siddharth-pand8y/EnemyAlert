import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipComponent } from './ship/ship.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';
import { CountryComponent } from './country/country.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

const routes: Routes = [
  {
    path: '',
    component: CountrySelectorComponent,
  },
  {
    path: ':id',
    component: CountryComponent,
    children: [
      {
        path: 'ships',
        component: ShipComponent,
      },
      {
        path: 'ships/:shipId',
        component: ShipDetailComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
