import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'country', pathMatch: 'full' },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.module').then((m) => m.CountryModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
