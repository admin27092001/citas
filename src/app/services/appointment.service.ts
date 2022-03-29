import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Appointment} from "../entities/appointment.entity";
import {AuthService} from "./auth.service";
import {CreateAppointmentDto} from "../dto/create-appointment.dto";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private api = environment.api + '/appointments'
  private httpHeaders: HttpHeaders;

  constructor(private readonly httpClient: HttpClient, private readonly authService: AuthService) {
    const user = this.authService.getLoggedUser();
    this.httpHeaders = new HttpHeaders({
      "Accept": "application/json;v=1",
    })

    if (user) {
      this.httpHeaders = this.httpHeaders.append("Authorization", `Bearer ${user.accessToken}`);
    }
  }

  findAll() {
    return this.httpClient.get<Appointment[]>(`${this.api}`, {headers: this.httpHeaders});
  }

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.httpClient.post<Appointment>(`${this.api}`, createAppointmentDto, {headers: this.httpHeaders});
  }
}
