import {NgModule}       from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}   from "./app.components";
import {HomeComponent} from "./home/home.component";
import {routing} from "./app.routes";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }