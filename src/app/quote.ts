export class Quote {
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public showAuthor: boolean;
  constructor(private _id: number,public quote: string,public author: string,public name: string,public completeDate: Date){
    this.showAuthor=false;
  }
}