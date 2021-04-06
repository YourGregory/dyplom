import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OfficeComponent} from './office/office.component';
import {AllTicketsComponent} from './all-tickets/all-tickets.component';
import {AirplanesTicketsComponent} from './airplanes-tickets/airplanes-tickets.component';
import {TrainsTicketsComponent} from './trains-tickets/trains-tickets.component';
import {BusTicketsComponent} from './bus-tickets/bus-tickets.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: 'office', component: OfficeComponent},
  {path: 'tickets/all', component: AllTicketsComponent},
  {path: 'tickets/airplanes', component: AirplanesTicketsComponent},
  {path: 'tickets/trains', component: TrainsTicketsComponent},
  {path: 'tickets/bus', component: BusTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
