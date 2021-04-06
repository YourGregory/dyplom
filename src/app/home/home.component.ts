import { Component, OnInit } from '@angular/core';
import {ButtonsModule} from 'angular-bootstrap-md';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon} from '@angular/material/icon';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links = [
    {path: 'all-tickets', label: 'All transports'}
  ];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {

  }
  toggleBackground(): void {
    this.background = this.background ? undefined : 'primary';
  }
}
