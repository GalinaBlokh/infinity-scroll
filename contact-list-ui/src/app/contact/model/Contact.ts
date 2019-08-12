export class Contact {
  private _id: number;
  private _name: string;
  private _phoneNumber: number;

  constructor(id: number, name: string, phoneNumber: number) {
    this._id = id;
    this._name = name;
    this._phoneNumber = phoneNumber;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }

  set phoneNumber(value: number) {
    this._phoneNumber = value;
  }
}
