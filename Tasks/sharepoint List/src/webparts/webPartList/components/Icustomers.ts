export interface ISPListCustomerItem{
    ID:string;
    Title:string;
    ModifiedBy:string;
    Modified:string;
    key?:string;
  }

  export interface ISPListDropDown{
    Id:string;
    Title:string;
    ModifiedBy:string;
    Modified:string;
    keys?:ISPListDropDownKey;
  }

  export interface ISPListDropDownKey{
    text:string;
    key:string;
  }

  export interface IPropertyPaneDropdownOption{
    text:string;
    key:string;
    index:number;
  }