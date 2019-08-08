import * as React from 'react';
import styles from './SearchList1.module.scss';
import { ISearchListProps } from './ISearchListProps';
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
//https://wmdomaindev.sharepoint.com/_api/search/?query/querytext=`green`
//https://wmdomaindev.sharepoint.com/sites/Dev2/_api/search/?query/querytext=banana
//https://wmdomaindev.sharepoint.com/sites/Dev2/_api/search/query?querytext='GTSet|%2395d85088-b2dd-48e9-b8a2-9938b909d6d9'&clienttype='ContentSearchRegular'
//https://wmdomaindev.sharepoint.com/sites/Dev2/_api/search/query?querytext=%27colors+path:%22https://wmdomaindev.sharepoint.com/sites/Dev2/Lists/SuperList%22%27&&selectproperties=%27Title%2ccolors%2cowstaxidmetadataalltagsinfo%27
const idTermSet = 'GTSet|%2395d85088-b2dd-48e9-b8a2-9938b909d6d9';
//{HostUrl}
export default class SearchList extends React.Component<ISearchListProps, {}> {
 public data=[];
  private _getdata(){
    fetch(`https://wmdomaindev.sharepoint.com/sites/Dev2/_api/search/query?querytext='GTSet|%2395d85088-b2dd-48e9-b8a2-9938b909d6d9'&selectproperties='Title%2ccolors%2cowstaxidmetadataalltagsinfo'&clienttype='ContentSearchRegular'`, {
  method: 'get',
  headers: {
    'accept': "application/json;odata=verbose",
    'content-type': "application/json;odata=verbose",
  }
})
  .then((json) => json.json())
  .then((jsonData) => {
    var data =jsonData.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
   console.log(data);
   this.data=data;
    //let data = jsonData.d.results.filter(item => item.Title === this.context.pageContext.site.serverRequestPath);
   // if (data.length == 0) {
    //  this.postItem(this.context.pageContext.site.serverRequestPath, 1);
   
  //  }
  //  else {
  
  //  }
  });
  }
 
  public render(): React.ReactElement<ISearchListProps> {
    this._getdata();
    const Columns:IColumn[]=[{key:"Title",minWidth: 70,name:"Title"},{key:"Author",minWidth: 70,name:"Author"}];

    return (
      <div className={styles.searchList}>
        <div className={styles.container}>
          <div className={styles.row}>  
            <div className={styles.column}>
              <span className={styles.title}>Your List</span>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
