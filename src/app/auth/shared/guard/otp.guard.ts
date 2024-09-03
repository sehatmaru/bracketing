import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class OtpGuardService {

  constructor(private router: Router) {}

	canActivate(): boolean {
		if (!localStorage.getItem('account.temporaryToken')) {
			this.router.navigate(['login']);
			
      		return false;
		}

		return true;
	}

}
