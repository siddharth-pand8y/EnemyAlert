export interface IShipDetail {
  shipId: number;
  shipName: string;
  countryId: string;
  description: string;
  imageUrl: string;
  attachments: IAttachmentDetail[];
}

export interface IAttachmentDetail {
  attachmentId: number;
  attachmentName: string;
  attachmentDescription: string;
  attachmentImageUrl: string;
  coords: string;
}
