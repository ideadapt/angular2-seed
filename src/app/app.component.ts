import {Component} from '@angular/core';

require('./app.component.global.scss');


@Component({
  selector   : 'app',
  styles: [require('./app.component.scss')], // TODO not working yet, nothing loaded
  templateUrl: './app.component.html',
})
export class AppComponent {
}
