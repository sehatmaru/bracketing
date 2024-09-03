import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StatusCode } from 'src/app/shared/enum/status-code.enum';
import { KeyResponseModel, ListKeyRequestModel } from '../../shared/models/key-model';
import { KeyService } from '../../shared/service/key.service';
import { Utils } from 'src/app/shared/utils/utils';
import { ClipboardService } from 'ngx-clipboard';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { StorageService } from 'src/app/shared/service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public keyList: KeyResponseModel[] = []
  public categoryList: any[] = []

  public searchValue = ''
  public categoryValue = 'ALL'

  public generatedPassword = ''

  constructor(
    private authService: AuthService,
    private keyService: KeyService,
    private storageService: StorageService,
    private utils: Utils,
    private router: Router,
    private snackbar: MatSnackBar,
    private clipboardService: ClipboardService
  ) { }
  
  ngOnInit(): void {
    this.getKeyList()
  }

  getKeyList() {
    this.utils.openLoadingDialog()

    const bodyRequest = new ListKeyRequestModel()
    bodyRequest.search = this.searchValue
    bodyRequest.category = this.categoryValue

    this.keyService.getList(bodyRequest).subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.keyList = resp.result.data == null ? [] : resp.result.data
          if (this.categoryList.length == 0) this.getCategoryList()

          this.keyList.forEach(element => {
            switch (element.category) {
              case 'GOOGLE': 
                element.icon = '../../../../assets/icons/google-authenticator-svgrepo-com.svg'
                break
              case 'NETFLIX':
                element.icon = '../../../../assets/icons/netflix-svgrepo-com.svg'
                break
              case 'LINKEDIN':
                element.icon = '../../../../assets/icons/linkedin-svgrepo-com.svg'
                break
              case 'FACEBOOK': 
                element.icon = '../../../../assets/icons/facebook-svgrepo-com.svg'
                break
              case 'INSTAGRAM':
                element.icon = '../../../../assets/icons/instagram-svgrepo-com.svg'
                break
              case 'STEAM':
                element.icon = '../../../../assets/icons/steam-svgrepo-com.svg'
                break
              case 'MICROSOFT':
                element.icon = '../../../../assets/icons/microsoft-office-svgrepo-com.svg'
                break
              case 'MAIL':
                element.icon = '../../../../assets/icons/gmail-svgrepo-com.svg'
                break
              case 'CODE':
                element.icon = '../../../../assets/icons/code-editor-svgrepo-com.svg'
                break
            }
          });
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

  getCategoryList() {
    this.keyService.getCategoryList().subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.categoryList = resp.result
        } else {
          this.snackbar.open(resp.message, 'OK', { duration: 5000 })
        }
      },
      error: (error) => {
        this.snackbar.open(error.message, 'OK', { duration: 5000 })
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

  toHistory() {
    this.router.navigateByUrl('history')
  }

  doLogout() {
    this.utils.openLoadingDialog()

    this.authService.logout().subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.storageService.removeLogged()
          this.router.navigateByUrl('login');
          
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

  generatePassword() {
    this.utils.openLoadingDialog()

    this.keyService.generatePassword().subscribe({
      next: (resp) => {
        if (resp.statusCode == StatusCode.SUCCESS) {
          this.generatedPassword = resp.result.password

          document.getElementById('generated-password')?.click();
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

  clearSearch() {
    this.searchValue = ''
    this.categoryValue = 'ALL'

    this.getKeyList()
  }

  doCopy(value: string) {
    this.clipboardService.copyFromContent(value)

    this.snackbar.open('Copied', 'OK', { duration: 5000 })
  }
}
