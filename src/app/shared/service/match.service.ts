import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/shared/interface/common.interface';
import { CommonService } from 'src/app/shared/service/common.service';
import { MatchResponse } from '../models/response/match/match-response';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private root = 'api/match';
  constructor(private commonApi: CommonService) { }

  getTournamentMatchList(tournamentId: number, isGroupStage: boolean): Observable<CommonResponse<MatchResponse[]>> {
    return this.commonApi.get(`${this.root}/tournament/${tournamentId}?isGroupStage=${isGroupStage}`) as Observable<CommonResponse<MatchResponse[]>>;
  }
}
