import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AppointmentService} from "../../../../services/appointment.service";
import {User} from "../../../../entities/user.entity";
import {AuthService} from "../../../../services/auth.service";
import {CreateAppointmentDto} from "../../../../dto/create-appointment.dto";

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.scss']
})
export class AppointmentCreateComponent implements OnInit {
  createForm: FormGroup;
  private user?: User;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly appointmentService: AppointmentService,
  ) {
    this.createForm = this.initForm();
    this.user = this.authService.getLoggedUser();
  }

  ngOnInit(): void {
  }

  createAppointment() {
    if (this.user) {
      const {procedure, startDate} = this.createForm.value;
      const appointment: CreateAppointmentDto = {
        userId: this.user.userId,
        procedure,
        startDate
      }

      this.appointmentService.create(appointment).subscribe({
        next: () => {
          this.router.navigateByUrl('/appointments').then();
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }

  private initForm() {
    return this.formBuilder.group({
      procedure: new FormControl(null, []),
      startDate: new FormControl(null, []),
    })
  }
}
