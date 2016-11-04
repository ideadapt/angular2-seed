import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {TranslateModule} from 'ng2-translate';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from "./app.component";
import {GithubService} from "./github/shared/github.service";
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {GitHubModule} from './github/github.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, GitHubModule, RouterModule.forRoot(rootRouterConfig), TranslateModule.forRoot()],
  providers   : [GithubService, {provide: LocationStrategy, useClass: HashLocationStrategy}] ,
  bootstrap   : [AppComponent]
})
export class AppModule {

}
