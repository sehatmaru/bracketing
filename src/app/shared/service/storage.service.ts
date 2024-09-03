import { Injectable } from '@angular/core';

const ID = 'account.id';
const USERNAME = 'account.username';
const NAME = 'account.name';
const TOKEN = 'account.token';
const TEMPORARY_TOKEN = 'account.temporaryToken';
const FORGOT = 'account.forgot';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  	public setLogin(id: string, username: string, name: string, accessToken: string) {
		localStorage.setItem(ID, id);
		localStorage.setItem(USERNAME, username);
		localStorage.setItem(NAME, name);
		localStorage.setItem(TOKEN, accessToken);
	}

	public setTemporaryToken(temporaryToken: string) {
		localStorage.setItem(TEMPORARY_TOKEN, temporaryToken)
	}

	public setForgot() {
		localStorage.setItem(FORGOT, 'yes')
	}

	public removeForgot() {
		localStorage.removeItem(FORGOT)
	}

	public removeLogged() {
		localStorage.removeItem(ID);
		localStorage.removeItem(USERNAME);
		localStorage.removeItem(NAME);
		localStorage.removeItem(TOKEN);
	}

	public isLogged() {
		return localStorage.getItem(USERNAME) != null;
	}

	public getEmail() {
		return localStorage.getItem(USERNAME) ?? '';
	}

	public getSecureId() {
		return localStorage.getItem(ID) ?? '';
	}

	public getName() {
		return localStorage.getItem(NAME) ?? '';
	}

	public getToken() {
		if (this.getTemporaryToken() != '') return this.getTemporaryToken() ?? ''
		else return localStorage.getItem(TOKEN) ?? ''
	}

	public getTemporaryToken() {
		return localStorage.getItem(TEMPORARY_TOKEN) ?? '';
	}

	public removeTemporaryToken() {
		localStorage.removeItem(TEMPORARY_TOKEN);
	}
}
