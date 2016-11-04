import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "../app.routes";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {TranslateModule} from 'ng2-translate';

import {GithubService} from "../github/shared/github.service";
import {RepoBrowserComponent} from './repo-browser/repo-browser.component';
import {RepoListComponent} from './repo-list/repo-list.component';
import {RepoDetailComponent} from './repo-detail/repo-detail.component';

@NgModule({
    declarations: [
        RepoBrowserComponent,
        RepoListComponent,
        RepoDetailComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), TranslateModule.forRoot()]
})
export class GitHubModule {}