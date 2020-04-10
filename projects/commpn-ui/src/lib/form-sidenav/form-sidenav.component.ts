import { Component, OnInit } from '@angular/core';
import { navItemsData } from './navItems';


@Component({
  selector: 'lib-form-sidenav',
  templateUrl: './form-sidenav.component.html',
  styleUrls: ['./form-sidenav.component.scss']
})
export class FormSidenavComponent {

  minimized = false;
  public navItems = [...navItemsData];

  toggleMinimize(e) {
    this.minimized = e;
  }

}
