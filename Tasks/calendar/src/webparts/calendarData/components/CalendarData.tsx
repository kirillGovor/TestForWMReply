import * as React from 'react';
import styles from './CalendarData.module.scss';
import { ICalendarDataProps } from './ICalendarDataProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import "isomorphic-fetch";
export default class CalendarData extends React.Component<ICalendarDataProps, {}> {
  public constructor(props: ICalendarDataProps, any) {
    super(props);
  }

  public render(): React.ReactElement<ICalendarDataProps> {
    return (
      <div className={styles.calendarData}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>{this.props.dataAboutMe.mail}</span>
              <p className={styles.subTitle}>{this.props.dataAboutMe.displayName}</p>
              <Dropdown className={styles.title}
                label="select option"
                options={this.props.calendars}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
