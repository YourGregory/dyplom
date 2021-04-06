import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AirplanesTicketsComponent } from './airplanes-tickets/airplanes-tickets.component';
import { TrainsTicketsComponent } from './trains-tickets/trains-tickets.component';
import { BusTicketsComponent } from './bus-tickets/bus-tickets.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OfficeComponent,
    AirplanesTicketsComponent,
    TrainsTicketsComponent,
    BusTicketsComponent,
    AllTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
