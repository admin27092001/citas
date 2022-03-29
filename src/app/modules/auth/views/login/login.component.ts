import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserLoginDto} from "../../../../dto/user-login.dto";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {
  }

  login() {
    const {email, password} = this.loginForm.value;
    const userLogin: UserLoginDto = {
      email,
      password,
    }

    this.authService.login(userLogin).subscribe({
      next: (u) => {
        this.authService.setLoggedUser(u);
        this.router.navigateByUrl('/appointments').then();
      },
      error: () => {
      }
    });
  }

  private initForm() {
    return this.formBuilder.group({
      email: new FormControl(null, []),
      password: new FormControl(null, []),
    })
  }
}
