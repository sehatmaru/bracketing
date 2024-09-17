import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/shared/interface/common.interface';
import { CommonService } from 'src/app/shared/service/common.service';
import { MatchResponse } from '../models/response/match/match-response';
import { MatchScoreRequest } from '../models/request/match/match-score-request';
import { MatchPlayedResponse } from '../models/response/match/match-played-response';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private root = 'api/match';
  constructor(private commonApi: CommonService) { }

  getTournamentMatchList(tournamentId: number, isGroupStage: boolean): Observable<CommonResponse<MatchResponse[]>> {
    return this.commonApi.get(`${this.root}/tournament/${tournamentId}?isGroupStage=${isGroupStage}`) as Observable<CommonResponse<MatchResponse[]>>;
  }

  submitScore(matchId: number, request: MatchScoreRequest): Observable<CommonResponse<MatchPlayedResponse>> {
    return this.commonApi.post(`${this.root}/score/submit/${matchId}`, request) as Observable<CommonResponse<MatchPlayedResponse>>;
  }
}
