import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { MatchDetailComponent } from './dialog/match-detail/match-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailComponent,
    MatchDetailComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    FormsModule
  ]
})
export class TournamentModule { }
