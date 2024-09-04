import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'bracketing';

  ngOnInit() {
    // require('cors')({origin: true});
  }
}
