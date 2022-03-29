import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../../entities/appointment.entity";
import {AppointmentService} from "../../../../services/appointment.service";

@Component({
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {
  appointments: Appointment[] = []

  constructor(private readonly appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentService.findAll().subscribe({
      next: (a) => {
        this.appointments = a;
        console.log(a)
      }
    })
  }

}
