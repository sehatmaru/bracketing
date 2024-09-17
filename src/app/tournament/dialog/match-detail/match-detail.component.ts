import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatchStatus } from 'src/app/shared/enum/match-status.enum';
import { MatchResponse } from 'src/app/shared/models/response/match/match-response';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit{

  public match: MatchResponse = new MatchResponse()

  public isTournamentStarted = false

  public scoreA = 0
  public scoreB = 0

  constructor(
    private dialogRef: MatDialogRef<MatchDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.match = this.data.match

    if (this.match.teamA) {
      this.scoreA = this.match.teamA.score
    }

    if (this.match.teamB) {
      this.scoreB = this.match.teamB.score
    }

    this.isTournamentStarted = this.data.isTournamentStarted
  }
  
  public isMatchFinished(): boolean {
    return this.match.status == MatchStatus.FINISHED
  }

  public isMatchReady(): boolean {
    return this.match.teamA != null && this.match.teamB != null
  }

  public saveScore() {
    this.match.teamA.score = Number(this.scoreA)
    this.match.teamB.score = Number(this.scoreB)

    if (this.match.teamA.score > this.match.teamB.score) {
      this.match.winner = this.match.teamA.id
      this.match.teamA.isWinner = true
      this.match.teamB.isWinner = false
    } else if (this.match.teamA.score < this.match.teamB.score) {
      this.match.winner = this.match.teamB.id
      this.match.teamB.isWinner = true
      this.match.teamA.isWinner = false
    } else {
      this.match.teamB.isWinner = false
      this.match.teamA.isWinner = false
    }

    this.dialogRef.close(this.match);
  }

  public cancel() {
    this.dialogRef.close()
  }

  public isCanSubmit():boolean {
    return this.scoreA != null && this.scoreB != null
  }
}
