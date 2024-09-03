import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponsei } from 'src/app/shared/interface/common.interface';
import { CommonService } from 'src/app/shared/service/common.service';
import { HistoryResponseModel } from '../models/history-model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private root = 'history';
  constructor(private commonApi: CommonService) { }

  getList(): Observable<CommonResponsei<HistoryResponseModel[]>> {
    return this.commonApi.get(`${this.root}/list`, true) as Observable<any>;
  }
}
