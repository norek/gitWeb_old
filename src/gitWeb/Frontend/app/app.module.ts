import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}   from "./app.components";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }