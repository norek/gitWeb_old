System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./commit-detail.component", "./app.component", "./commit.component", "./commit.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, http_1, commit_detail_component_1, app_component_1, commit_component_1, commit_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (commit_detail_component_1_1) {
                commit_detail_component_1 = commit_detail_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (commit_component_1_1) {
                commit_component_1 = commit_component_1_1;
            },
            function (commit_service_1_1) {
                commit_service_1 = commit_service_1_1;
            }],
        execute: function() {
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        app_component_1.AppComponent,
                        commit_detail_component_1.CommitDetailComponent,
                        commit_component_1.CommitComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule
                    ],
                    providers: [commit_service_1.CommitService],
                    bootstrap: [app_component_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO1lBQXlCLENBQUM7WUFiMUI7Z0JBQUMsZUFBUSxDQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDViw0QkFBWTt3QkFDWiwrQ0FBcUI7d0JBQ3JCLGtDQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0NBQWE7d0JBQ2IsaUJBQVU7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztvQkFDMUIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztpQkFDNUIsQ0FBQzs7eUJBQUE7WUFDRixpQ0FBMEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9ICAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0NvbW1pdERldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vY29tbWl0LWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb21taXRDb21wb25lbnR9IGZyb20gXCIuL2NvbW1pdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb21taXRTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBDb21taXREZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWl0Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0NvbW1pdFNlcnZpY2VdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
