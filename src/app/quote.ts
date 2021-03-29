export class Quote {
    showDetails: boolean;
    constructor(
      public id: number,
      public quote: string,
      public author: string,
      public submittedBy: string,
      public votes: number = 0,
      public dateCreated: Date
    ) {
      this.showDetails = false;
    }
}
