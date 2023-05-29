import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SHIPS } from 'src/app/common';
import { IShipDetail } from 'src/app/common/';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss'],
})
export class ShipComponent {
  ships: IShipDetail[] = [];
  countryCode: any;
  countryFlag: string = '';
  countryColor: any = '#000';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.countryCode = localStorage.getItem('countryCode');
    this.countryFlag = `assets/images/${this.countryCode}/flag.jpg`;
    this.countryColor = localStorage.getItem('countryColor');
    this.ships = [...SHIPS.filter((s) => s.countryId === this.countryCode)];
  }
}
