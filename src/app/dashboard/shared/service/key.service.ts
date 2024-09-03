import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponsei } from 'src/app/shared/interface/common.interface';
import { CommonService } from 'src/app/shared/service/common.service';
import { BaseRequestModel, PasswordResponseModel, CreateEditKeyRequestModel, CreateEditKeyResponseModel, KeyResponseModel, ListKeyRequestModel, ListKeyResponseModel, OpenDeleteKeyRequestModel, OpenKeyResponseModel } from '../models/key-model';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  private root = 'key';
  constructor(private commonApi: CommonService) { }

  getList(bodyRequest: ListKeyRequestModel): Observable<CommonResponsei<ListKeyResponseModel>> {
    return this.commonApi.post(`${this.root}/list`, bodyRequest, false) as Observable<any>;
  }

  create(bodyRequest: CreateEditKeyRequestModel): Observable<CommonResponsei<CreateEditKeyResponseModel>> {
    return this.commonApi.post(`${this.root}/create`, bodyRequest, false) as Observable<any>;
  }

  edit(bodyRequest: CreateEditKeyRequestModel): Observable<CommonResponsei<CreateEditKeyResponseModel>> {
    return this.commonApi.post(`${this.root}/edit`, bodyRequest, false) as Observable<any>;
  }

  open(bodyRequest: BaseRequestModel): Observable<CommonResponsei<OpenKeyResponseModel>> {
    return this.commonApi.post(`${this.root}/open`, bodyRequest, false) as Observable<any>;
  }

  getDetail(bodyRequest: BaseRequestModel): Observable<CommonResponsei<KeyResponseModel>> {
    return this.commonApi.post(`${this.root}/change-password`, bodyRequest, false) as Observable<any>;
  }

  getCategoryList(): Observable<CommonResponsei<any[]>> {
    return this.commonApi.get(`${this.root}/category/list`, false) as Observable<any>;
  }

  delete(bodyRequest: BaseRequestModel): Observable<CommonResponsei<Boolean>> {
    return this.commonApi.post(`${this.root}/delete`, bodyRequest, false) as Observable<any>;
  }

  resendOtp(): Observable<CommonResponsei<Boolean>> {
    return this.commonApi.get(`${this.root}/otp/resend`, false) as Observable<any>;
  }

  copyKeyPassword(bodyRequest: BaseRequestModel): Observable<CommonResponsei<PasswordResponseModel>> {
    return this.commonApi.post(`${this.root}/copy`, bodyRequest, false) as Observable<any>;
  }

  generatePassword(): Observable<CommonResponsei<PasswordResponseModel>> {
    return this.commonApi.get(`${this.root}/password/generate`, false) as Observable<any>;
  }
}
