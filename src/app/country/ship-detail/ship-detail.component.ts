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
  selectedAttachment: number = -1;
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
      this.shipInfo = { ...SHIPS[index] };
    }
  }

  handleMouseEnter(event: MouseEvent, attachmentId: number) {
    const attachmentIndex = this.shipInfo.attachments.findIndex(
      (a) => a.attachmentId === attachmentId
    );
    if (attachmentIndex !== -1) {
      this.selectedAttachment =
        this.shipInfo.attachments[attachmentIndex].attachmentId;
      this.rotateArray(this.shipInfo.attachments, attachmentIndex);
    }
  }

  handleMouseLeave(): void {
    this.resetAttachmentList();
  }

  clickCoord(event: MouseEvent): void {
    console.log(`${event.offsetX},${event.offsetY},50`);
  }

  rotateArray<T>(array: Array<T>, positions: number): Array<T> {
    const subArray = array.splice(0, positions);
    array.push(...subArray);
    return array;
  }

  resetAttachmentList(): void {
    this.selectedAttachment = -1;
  }
}
