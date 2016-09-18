import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {CommitDetailComponent} from "./commit-detail.component";
import {AppComponent} from "./app.component";
import {CommitComponent} from "./commit.component";
import {CommitService} from "./commit.service";

@NgModule({
    declarations: [
        AppComponent,
        CommitDetailComponent,
        CommitComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [CommitService],
    bootstrap: [AppComponent]
})
export class AppModule { }