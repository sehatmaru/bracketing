import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileGuardService } from '../auth/shared/guard/profile.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ProfileGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
