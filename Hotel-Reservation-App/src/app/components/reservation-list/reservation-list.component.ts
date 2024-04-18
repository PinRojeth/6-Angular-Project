import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  constructor(private reservationService: ReservationService) {}

  reservations: Reservation[] = [];

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservation();
  }

  onDelete(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
