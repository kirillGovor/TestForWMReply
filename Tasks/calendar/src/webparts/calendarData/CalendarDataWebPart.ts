import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'CalendarDataWebPartStrings';
import CalendarData from './components/CalendarData';
import { ICalendarDataProps,IdataAboutMe,ICalendars,IPropertyPaneDropdownOption } from './components/ICalendarDataProps';
import { Client } from "@microsoft/microsoft-graph-client";
import { MSGraphClient } from "@microsoft/sp-http";
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface ICalendarDataWebPartProps {
  description: string;
  context: any;
  dataAboutMe:IdataAboutMe;
  calendars:IPropertyPaneDropdownOption[];
}

//const client = Client.init();
//let res = client.api('https://graph.microsoft.com/v1.0/me/calendar/events')
//  .get().then(() => console.log(res));

export default class CalendarDataWebPart extends BaseClientSideWebPart<ICalendarDataWebPartProps> {
  public render(): void {
    console.log(this.context);
    
    this.context.msGraphClientFactory.getClient()
      .then((data: MSGraphClient): void => {
        // get information about the current user from the Microsoft Graph
        data
          .api('/me')
          .get((error, response: any, rawResponse?: any) => {
            console.log(response);
            this.properties.dataAboutMe=response;
          });
      });

      this.context.msGraphClientFactory.getClient()
      .then((data: MSGraphClient): void => {
        // get information about the current user from the Microsoft Graph
        data
          .api('/me/calendars')
          .get((error, response: any, rawResponse?: any) => {
            console.log(response);
            this.properties.calendars=this.fetchOptionsSimple(response);
          });
      });

   
    const element: React.ReactElement<ICalendarDataProps> = React.createElement(
      CalendarData,
      {
        description: this.properties.description,
        context: this.context,
        dataAboutMe:this.properties.dataAboutMe,
        calendars:this.properties.calendars
      }
    );

    ReactDom.render(element, this.domElement);
  }
  private fetchOptionsSimple(list): Array<IPropertyPaneDropdownOption> {
    var options: Array<IPropertyPaneDropdownOption> = new Array<IPropertyPaneDropdownOption>();
    list.value.map((item: ICalendars, index: number) => {
      options.push({ key: item.name, text: item.name, index: Number(item.id) });
    });
    return options;
  }
  
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
