import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { RegisterRequestModel } from '../../shared/models/auth-model';
import { StatusCode } from 'src/app/shared/enum/status-code.enum';
import { Utils } from 'src/app/shared/utils/utils';
import { StorageService } from 'src/app/shared/service/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public password = ''
  public rePassword = ''
  public name = ''
  public email = ''
  public username = ''

  public isPasswordMissmatch = false
  public isEmailValid = true

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private snackbar: MatSnackBar,
    private utils: Utils
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.isPasswordMissmatch = false
    this.isEmailValid = true

    if (this.password != this.rePassword) this.isPasswordMissmatch = true
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) this.isEmailValid = false
    
    if (!this.isPasswordMissmatch && this.isEmailValid) this.doRegister()
  }

  doRegister() {
    this.utils.openLoadingDialog()

    const bodyRequest = new RegisterRequestModel()
    bodyRequest.password = this.password
    bodyRequest.email = this.email
    bodyRequest.fullName = this.name
    bodyRequest.username = this.username

    this.authService.doRegister(bodyRequest).subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          // this.storageService.setTemporaryToken(
          //   resp.result.temporaryToken
          // )

          // this.router.navigateByUrl('otp-validation');
          this.router.navigateByUrl('');
        } else {
          this.snackbar.open(resp.message, 'OK', { duration: 5000 })
        }

        this.utils.closeLoadingDialog()
      },
      error: (error) => {
        this.snackbar.open(error.message, 'OK', { duration: 5000 })
        this.utils.closeLoadingDialog()
      }
   });
  }

  toLogin() {
    this.router.navigateByUrl('login')
  }

  isValid(): boolean {
    return this.password != '' && this.rePassword != ''
      && this.name != '' && this.email != '' && this.username != ''
  }
}
