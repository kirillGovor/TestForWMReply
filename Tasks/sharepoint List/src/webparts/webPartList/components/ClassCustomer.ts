import { ISPListCustomerItem } from "./Icustomers";

export class  ClassCustomer{
    public CustomerName:string;
    public CustomerAddress:string;
    public CustomerType:string;
    public CustomerID:string;
    constructor(item: ISPListCustomerItem) {
      this.CustomerName = item.ID;
      this.CustomerAddress = item.Title;
      this.CustomerType = item.ModifiedBy;
      this.CustomerID=item.Modified;
  }
}