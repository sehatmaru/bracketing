import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { ProfileGuardService } from '../auth/shared/guard/profile.guard';

const routes: Routes = [
  {
    path: 'tournament/:id',
    component: DetailComponent,
    canActivate: [ProfileGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
