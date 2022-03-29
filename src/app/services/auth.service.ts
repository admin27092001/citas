import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginDto} from "../dto/user-login.dto";
import {environment} from "../../environments/environment";
import {User} from "../entities/user.entity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = environment.api + '/auth';

  constructor(private readonly httpClient: HttpClient) {
  }

  login(userLogin: UserLoginDto) {
    return this.httpClient.post<User>(`${this.api}/login`, userLogin);
  }

  setLoggedUser(user: User): void {
    localStorage.setItem('loggedUser', JSON.stringify(user))
  }

  getLoggedUser(): User | undefined {
    const userJson = localStorage.getItem('loggedUser') ?? '';
    if (userJson) return JSON.parse(userJson);
    else return undefined;
  }
}
