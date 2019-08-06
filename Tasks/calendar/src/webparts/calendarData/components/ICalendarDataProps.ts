import {WebPartContext} from '@microsoft/sp-webpart-base';
export interface ICalendarDataProps {
  description: string;
  context:WebPartContext;
  dataAboutMe:IdataAboutMe;
  calendars:IPropertyPaneDropdownOption[];
}
export interface IdataAboutMe{
mail:string;
displayName:string;
}
export interface ICalendars{
  name:string;
  id:string;
}
export interface IPropertyPaneDropdownOption{
  text:string;
  key:string;
  index:number;
}