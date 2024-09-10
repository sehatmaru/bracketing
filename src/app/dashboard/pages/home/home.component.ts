import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StatusCode } from 'src/app/shared/enum/status-code.enum';
import { Utils } from 'src/app/shared/utils/utils';
import { TournamentService } from 'src/app/shared/service/tournament.service';
import { TournamentListResponse } from 'src/app/shared/models/response/tournament/tournament-list-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tournamentList: TournamentListResponse[] = []
  public categoryList: any[] = []

  public searchValue = ''
  public categoryValue = 'ALL'

  public generatedPassword = ''

  constructor(
    private tournamentService: TournamentService,
    private utils: Utils,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }
  
  ngOnInit(): void {
    this.getTournamentList()
  }

  getTournamentList() {
    this.utils.openLoadingDialog()

    this.tournamentService.getList().subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.tournamentList = resp.result == null ? [] : resp.result
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

  toCreateForm() {
    this.router.navigateByUrl('form')
  }

  toEditForm(secureId: string) {
    this.router.navigateByUrl('form?secureId=' + secureId)
  }

  toRevealKey(secureId: string) {
    this.router.navigateByUrl('reveal?secureId=' + secureId)
  }

  toDetail(id: number) {
    this.router.navigateByUrl('tournament/' + id)
  }

  clearSearch() {
    this.searchValue = ''
    this.categoryValue = 'ALL'

    this.getTournamentList()
  }

}
