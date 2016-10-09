import {NgModule}       from "@angular/core";
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
import './rxjs-extensions';

@NgModule({
    declarations: [
        AppComponent,
        CommitDetailComponent,
        CommitComponent,
        CommitSearchComponent,
        BranchComponent,
        TagComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [CommitService, CommitSearchService, BranchService,RepositoryService,LoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }