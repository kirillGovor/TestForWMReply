import * as React from 'react';
import styles from './WebPartList.module.scss';
import { IWebPartListProps } from './IWebPartListProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from 'sp-pnp-js';
import { ISPListCustomerItem } from './Icustomers';

export default class WebPartList extends React.Component<IWebPartListProps, any> {

  public constructor(props: IWebPartListProps, any) {
    super(props);
    this.state = {
      items: ["undefined"]
    };
  }

  public componentDidUpdate(prevProps) {
    if (this.props.dropdown !== prevProps.dropdown || this.props.filter !== prevProps.filter || this.props.top != prevProps.top) {
      this._getList();
    }
  }

  private _getList(): void {
    fetch("https://wmdomaindev.sharepoint.com" + this.props.url + `/_api/web/lists/getByTitle(  '${escape(this.props.dropdown)}'  )/items?$top=` + Number(this.props.top) + '&' + this.props.filter, {
      //https://wmdomaindev.sharepoint.com/sites/dev2/_api/web/lists/getByTitle('Liststst')/items?$top=2&$select=Title,Id
      method: 'get',
      headers: {
        'accept': "application/json;odata=verbose",
        'content-type': "application/json;odata=verbose",
      }
    })
      .then((json) => json.json())
      .then((jsonData) => {
        this.setState({ items: jsonData.d.results });
      });
  }

  public render(): React.ReactElement<IWebPartListProps> {
    return (
      <div className={styles.webPartList}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={styles.subTitle}>This is List</p>
              <p> description:</p>
              <p className={styles.url}> List: {escape(this.props.dropdown)}</p>
              <div className={"ms-Grid"}>
                <div className={"ms-Grid-row"}>
                  {
                    this.state.items.map((item: ISPListCustomerItem) => {
                      return (
                        <div className={"ms-Grid-col ms-sm6 ms-md6 ms-lg4"}>
                          <div>
                            <p>Item:</p>
                            <label className="ms-Label ms-font-xxl">id: {item.ID}</label>
                            <label className="ms-Label">name: {item.Title}</label>
                            <label className="ms-Label">list: {item.ModifiedBy}</label>
                            <label className="ms-Label">mondefied {item.Modified}</label>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


