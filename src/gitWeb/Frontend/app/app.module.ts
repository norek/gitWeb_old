import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {CommitDetailComponent} from "./commit-detail.component";
import {AppComponent} from "./app.component";
import {CommitComponent} from "./commit.component";
import {CommitService} from "./commit.service";
import {CommitSearchComponent} from "./commit/commit-search.component";
import {CommitSearchService} from "./commit/commit-search.service";

import './rxjs-extensions';

@NgModule({
    declarations: [
        AppComponent,
        CommitDetailComponent,
        CommitComponent,
        CommitSearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [CommitService, CommitSearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }