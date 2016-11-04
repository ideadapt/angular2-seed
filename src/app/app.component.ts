import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

require('./app.component.global.scss');


@Component({
  selector   : 'app',
  //styles: [require('./app.component.scss')], // TODO not working yet, nothing loaded
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
        translate.addLangs(["en", "de"]);
        translate.setDefaultLang('de');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|de/) ? browserLang : 'de');
    }
}
