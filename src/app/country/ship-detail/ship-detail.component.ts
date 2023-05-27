import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SHIPS } from 'src/app/common/config/config';
import { IShipDetail } from 'src/app/common/interface/ship.interface';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.scss'],
})
export class ShipDetailComponent {
  shipId: number = 1;
  shipInfo: IShipDetail = SHIPS[0];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.shipId = parseInt(
      this.route.snapshot.paramMap.get('shipId') ?? '1',
      10
    );

    this.fetchShipInformation(this.shipId);
  }

  fetchShipInformation(shipId: number): void {
    const index = SHIPS.findIndex((s) => s.shipId === shipId);

    if (index !== -1) {
      this.shipInfo = SHIPS[index];
    }

    console.log(this.shipInfo);
  }

  handleMouseOver(event: MouseEvent, attachmentId: number) {
    console.log(
      'mouseOver',
      event,
      this.shipInfo.attachments.filter((a) => a.attachmentId === attachmentId)
    );
  }
}
