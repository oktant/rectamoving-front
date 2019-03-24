import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="nav nav-pills nav-fill" style="cursor:pointer" >
      <li class="nav-item" *ngFor="let tab of tabs" (click)="selectTab(tab)" >
        <a class="nav-link" tabindex [class.active]="tab.active" [ngStyle]="{'background-color': tab.backColor, 'color': tab.color}">{{tab .title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => {
      tab.active = false;
      tab.backColor = 'white';
      tab.color = '#34ccff';
    });

    // activate the tab the user has clicked on.
    tab.active = true;
    tab.backColor = '#34ccff';
    tab.color = 'white';
  }



}
