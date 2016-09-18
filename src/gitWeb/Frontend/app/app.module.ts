import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}   from "./app.components";
import {HttpModule} from "@angular/http";
import {CommitDetailComponent} from "./commit-detail.component";

@NgModule({
    declarations: [
        AppComponent,
        CommitDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }