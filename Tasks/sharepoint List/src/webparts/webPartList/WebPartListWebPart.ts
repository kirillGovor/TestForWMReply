import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ISPListCustomerItem, ISPListDropDown, ISPListDropDownKey, IPropertyPaneDropdownOption } from './components/Icustomers';
import pnp, { JSONFileParser } from 'sp-pnp-js';
import { sp } from '@pnp/sp';
import { Web } from "sp-pnp-js";
import { Site } from "sp-pnp-js";
import { IODataList } from '@microsoft/sp-odata-types';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneButton,
} from '@microsoft/sp-property-pane';
import * as strings from 'WebPartListWebPartStrings';
import WebPartList from './components/WebPartList';
import { IWebPartListProps } from './components/IWebPartListProps';

export interface IWebPartListWebPartProps {
  top: string;
  url: string;
  filter: string;
  dropdown: string;
  list: any;
  newNameList:string;
}

export default class WebPartListWebPart extends BaseClientSideWebPart<IWebPartListWebPartProps> {
  public state = {
    context: this.context,
  };
  public render(): void {
    sp.setup({ spfxContext: this.context });
    const element: React.ReactElement<IWebPartListProps> = React.createElement(
      WebPartList,
      {
        top: this.properties.top,
        url: this.properties.url,
        filter: this.properties.filter,
        dropdown: this.properties.dropdown,
        list: this.properties.list,
        newNameList:this.properties.newNameList,
      },

    );
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _getList(): void {
    if (!this.properties.url) {
      this.properties.url = this.context.pageContext.web.serverRelativeUrl;
    }
    fetch("https://wmdomaindev.sharepoint.com/" + this.properties.url + "/_api/web/lists?$filter=Hidden%20eq%20false", {
      method: 'get',
      headers: {
        'accept': "application/json;odata=verbose",
        'content-type': "application/json;odata=verbose",
      }
    })
      .then((json) => json.json())
      .then((jsonData) => {
        this.properties.list = jsonData.d.results;
      });
  }

  private fetchOptionsSimple(list): Array<IPropertyPaneDropdownOption> {
    if (!list) {
      list = [];
    }
    var options: Array<IPropertyPaneDropdownOption> = new Array<IPropertyPaneDropdownOption>();
    list.map((item: ISPListDropDown, index: number) => {
      options.push({ key: item.Title, text: item.Title, index: Number(item.Id) });
    });
    return options;
  }

  private CreateList(): void {
debugger;
    let spWeb = new Web(this.context.pageContext.web.absoluteUrl);
    let spListTitle = this.properties.newNameList;
    let spListDescription = "SPFxPnP List";
    let spListTemplateId = 100;
    let spEnableCT = false;
    spWeb.lists.add(spListTitle, spListDescription, spListTemplateId, spEnableCT);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    this._getList();
    return {
      pages: [
        {
          header: {
            description: "Group"
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('url', {
                  label: "url",
                }),
                PropertyPaneDropdown('dropdown', {
                  label: 'dropDown',
                  options: this.fetchOptionsSimple(this.properties.list),

                }),
                PropertyPaneSlider('top', {
                  label: "top",
                  min: 1, max: 20
                }),
                PropertyPaneTextField('filter', {
                  label: 'OData filter',
                  multiline: true
                }),

                PropertyPaneTextField('newNameList', {
                  label: "New List name",
                }),
                PropertyPaneButton('', {
                  text: "add", onClick: this.CreateList.bind(this)
                })

              ]
            }
          ]
        }
      ]
    };
  }
}
