import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/shared/interface/common.interface';
import { ChangePasswordRequestModel, EditProfileRequestModel, ForgotPasswordRequestModel, LoginRequestModel, LoginResponseModel, RegisterRequestModel, RegisterResponseModel, ResetPasswordRequestModel, VerifyOtpRequestModel } from '../models/auth-model';
import { CommonService } from 'src/app/shared/service/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private root = 'auth';
  constructor(private commonApi: CommonService) { }

  doLogin(bodyRequest: LoginRequestModel): Observable<CommonResponse<LoginResponseModel>> {
    return this.commonApi.post(`${this.root}/login`, bodyRequest, false) as Observable<any>;
  }

  doRegister(bodyRequest: RegisterRequestModel): Observable<CommonResponse<any>> {
    return this.commonApi.post(`${this.root}/register`, bodyRequest, false) as Observable<any>;
  }

  getProfile(): Observable<CommonResponse<LoginResponseModel>> {
    return this.commonApi.get(`${this.root}/profile`, false) as Observable<any>;
  }

  editProfile(bodyRequest: EditProfileRequestModel): Observable<CommonResponse<Boolean>> {
    return this.commonApi.post(`${this.root}/edit-profile`, bodyRequest, false) as Observable<any>;
  }

  changePassword(bodyRequest: ChangePasswordRequestModel): Observable<CommonResponse<LoginResponseModel>> {
    return this.commonApi.post(`${this.root}/change-password`, bodyRequest, false) as Observable<any>;
  }

  logout(): Observable<CommonResponse<Boolean>> {
    return this.commonApi.post(`${this.root}/logout`, null, false) as Observable<any>;
  }

  verifyOtp(bodyRequest: VerifyOtpRequestModel): Observable<CommonResponse<Boolean>> {
    return this.commonApi.post(`${this.root}/otp/verify`, bodyRequest, false) as Observable<any>;
  }

  forgotPassword(bodyRequest: ForgotPasswordRequestModel): Observable<CommonResponse<Boolean>> {
    return this.commonApi.post(`${this.root}/password/forgot`, bodyRequest, false) as Observable<any>;
  }

  resetPassword(bodyRequest: ResetPasswordRequestModel): Observable<CommonResponse<Boolean>> {
    return this.commonApi.post(`${this.root}/password/reset`, bodyRequest, false) as Observable<any>;
  }

  resendOtp(): Observable<CommonResponse<Boolean>> {
    return this.commonApi.get(`${this.root}/otp/resend`, false) as Observable<any>;
  }
}
