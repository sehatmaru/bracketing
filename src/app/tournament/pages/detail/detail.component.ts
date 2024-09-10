import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusCode } from 'src/app/shared/enum/status-code.enum';
import { TournamentDetailResponse } from 'src/app/shared/models/response/tournament/tournament-detail-response';
import { TournamentService } from 'src/app/shared/service/tournament.service';
import { Utils } from 'src/app/shared/utils/utils';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TournamentStatus } from 'src/app/shared/enum/tournament-status.enum';
import { TournamentType } from 'src/app/shared/enum/tournament-type.enum';
import { MatchService } from 'src/app/shared/service/match.service';
import { MatchResponse } from 'src/app/shared/models/response/match/match-response';
import { MatchStage } from 'src/app/shared/enum/match-stage.enum';
import { MatchStatus } from 'src/app/shared/enum/match-status.enum';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DetailComponent implements OnInit {
  
  public tournamentId: any = 0
  public tournamentDetailData: TournamentDetailResponse = new TournamentDetailResponse()

  public groupGridTemplateColumns = 0
  public actionBtnGridTemplateColumns = 5

  public isGroupOpen = true
  public isBracketOpen = false

  public matches: MatchResponse[] = [];
  public stages: string[] = [];

  constructor(
    private tournamentService: TournamentService,
    private matchService: MatchService,
    private utils: Utils,
    private router: Router,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tournamentId = params.get('id');
    });

    this.groupGridTemplateColumns = 0
    this.actionBtnGridTemplateColumns = 5

    this.getTournamentDetail()
  }

  getTournamentDetail() {
    this.utils.openLoadingDialog()

    this.tournamentService.getTournamentDetail(this.tournamentId).subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.tournamentDetailData = resp.result

          if (this.isGroupFormat()) {
            this.openGroup()
            this.groupGridTemplateColumns = this.tournamentDetailData.groups.length

            if (this.isGroupStage()) {
              this.actionBtnGridTemplateColumns -= 0
            }
          } else {
            this.openBracket()
            this.actionBtnGridTemplateColumns -= 1

            if (this.isGroupStage()) {
              this.actionBtnGridTemplateColumns -= 1
            }
          }

          if (!this.isStatusWaiting()) {
            this.actionBtnGridTemplateColumns -= 2
          }
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

  getTournamentMatchList() {
    this.utils.openLoadingDialog()

    this.matchService.getTournamentMatchList(this.tournamentId, this.isGroupOpen).subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.matches = resp.result

          this.organizeStages();
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

  startTournament() {
    this.utils.openLoadingDialog()

    this.tournamentService.startTournament(this.tournamentId).subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.getTournamentDetail()
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

  randomizeTeam() {
    this.utils.openLoadingDialog()

    this.tournamentService.randomizeTournament(this.tournamentId).subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.getTournamentDetail()
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

  openGroup() {
    this.isGroupOpen = true
    this.isBracketOpen = false

    this.getTournamentMatchList()
  }

  openBracket() {
    this.isGroupOpen = false
    this.isBracketOpen = true
  
    this.getTournamentMatchList()
  }

  isGroupFormat(): boolean {
    return this.tournamentDetailData.type == TournamentType.TWO_STAGE
  }

  getActionBtnGridTemplateColumns(): string {
    return `repeat(${this.actionBtnGridTemplateColumns}, 1fr)`;
  }

  getGroupGridTemplateColumns(): string {
    return `repeat(${this.groupGridTemplateColumns}, 1fr)`
  }
  
  isStatusWaiting(): boolean {
    return this.tournamentDetailData.status == TournamentStatus.WAITING
  }

  isGroupStage(): boolean {
    return this.tournamentDetailData.stage == MatchStage.GROUP
  }

  organizeStages(): void {
    this.stages = [...new Set(this.matches.map(match => match.stage))].reverse();
  }

  getMatchesForStage(stage: string): MatchResponse[] {
    return this.matches.filter(match => match.stage === stage);
  }

  isMatchFinished(status: MatchStatus) {
    return status == MatchStatus.FINISHED
  }

}
