import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './components/home/home.module';
import { ReservationModule } from './components/reservation/reservation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    ReservationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
