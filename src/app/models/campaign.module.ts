export class Campaign {
  _id: string;
  name: string;
  keywords: [{name: string}];
  bidAmount: number;
  fund: number;
  status: boolean;
  town: string;
  radius: number;
}
