export class Contact {
  private _id: number;
  private _nane: string;
  private _phoneNumber: number;

  constructor(id: number, nane: string, phoneNumber: number) {
    this._id = id;
    this._nane = nane;
    this._phoneNumber = phoneNumber;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nane(): string {
    return this._nane;
  }

  set nane(value: string) {
    this._nane = value;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }

  set phoneNumber(value: number) {
    this._phoneNumber = value;
  }
}
