import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/shared/interface/common.interface';
import { CommonService } from 'src/app/shared/service/common.service';
import { TournamentListResponse } from 'src/app/shared/models/response/tournament/tournament-list-response';
import { CreateTournamentRequest } from 'src/app/shared/models/request/tournament/create-tournament-model';
import { CreateTournamentResponse } from 'src/app/shared/models/response/tournament/create-tournament-response';
import { GroupDetailResponse } from 'src/app/shared/models/response/tournament/group-detail-response';
import { TournamentDetailResponse } from 'src/app/shared/models/response/tournament/tournament-detail-response';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private root = 'api/tournament';
  constructor(private commonApi: CommonService) { }

  getList(): Observable<CommonResponse<TournamentListResponse[]>> {
    return this.commonApi.get(`${this.root}/list`) as Observable<CommonResponse<TournamentListResponse[]>>;
  }

  create(bodyRequest: CreateTournamentRequest): Observable<CommonResponse<CreateTournamentResponse>> {
    return this.commonApi.post(`${this.root}/create`, bodyRequest) as Observable<CommonResponse<CreateTournamentResponse>>;
  }

  getGroupDetail(groupId: number): Observable<CommonResponse<GroupDetailResponse>> {
    return this.commonApi.get(`${this.root}/group/detail/${groupId}`) as Observable<CommonResponse<GroupDetailResponse>>;
  }

  getTournamentDetail(tournamentId: number): Observable<CommonResponse<TournamentDetailResponse>> {
    return this.commonApi.get(`${this.root}/detail/${tournamentId}`) as Observable<CommonResponse<TournamentDetailResponse>>;
  }

  startTournament(tournamentId: number): Observable<CommonResponse<Boolean>> {
    return this.commonApi.post(`${this.root}/start/${tournamentId}`, null) as Observable<CommonResponse<Boolean>>;
  }

  randomizeTournament(tournamentId: number): Observable<CommonResponse<Boolean>> {
    return this.commonApi.post(`${this.root}/teams/randomize/${tournamentId}`, null) as Observable<CommonResponse<Boolean>>;
  }
}
