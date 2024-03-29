﻿import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {CommitDetailComponent} from "./commit/detail/commit-detail.component";
import {AppComponent} from "./app.component";
import {CommitComponent} from "./commit/commit.component";
import {CommitService} from "./commit/commit.service";
import {CommitSearchComponent} from "./commit/search/commit-search.component";
import {CommitSearchService} from "./commit/search/commit-search.service";
import {BranchService} from "./branch/branch.service";
import {BranchComponent} from "./branch/branch.component";
import {TagComponent} from "./tag/tag.component";
import {RepositoryService} from './repository/repository.service';
import {LoaderService} from './shared/loader.service';
import {ChangeService} from './changes/changes.service';
import {ChangeDetailComponent} from './changes/change-detail.component';

import './rxjs-extensions';

@NgModule({
    declarations: [
        AppComponent,
        CommitDetailComponent,
        CommitComponent,
        CommitSearchComponent,
        BranchComponent,
        TagComponent,
        ChangeDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [CommitService, CommitSearchService, BranchService,RepositoryService,LoaderService,ChangeService],
    bootstrap: [AppComponent]
})
export class AppModule { }