System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./commit-detail.component", "./app.component", "./commit.component", "./commit.service", "./commit/commit-search.component", "./commit/commit-search.service", "./branch/branch.service", "./branch/branch.component", './rxjs-extensions'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, commit_detail_component_1, app_component_1, commit_component_1, commit_service_1, commit_search_component_1, commit_search_service_1, branch_service_1, branch_component_1;
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
            },
            function (commit_search_component_1_1) {
                commit_search_component_1 = commit_search_component_1_1;
            },
            function (commit_search_service_1_1) {
                commit_search_service_1 = commit_search_service_1_1;
            },
            function (branch_service_1_1) {
                branch_service_1 = branch_service_1_1;
            },
            function (branch_component_1_1) {
                branch_component_1 = branch_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        app_component_1.AppComponent,
                        commit_detail_component_1.CommitDetailComponent,
                        commit_component_1.CommitComponent,
                        commit_search_component_1.CommitSearchComponent,
                        branch_component_1.BranchComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule
                    ],
                    providers: [commit_service_1.CommitService, commit_search_service_1.CommitSearchService, branch_service_1.BranchService],
                    bootstrap: [app_component_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtZQUF5QixDQUFDO1lBZjFCO2dCQUFDLGVBQVEsQ0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsNEJBQVk7d0JBQ1osK0NBQXFCO3dCQUNyQixrQ0FBZTt3QkFDZiwrQ0FBcUI7d0JBQ3JCLGtDQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0NBQWE7d0JBQ2IsaUJBQVU7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSwyQ0FBbUIsRUFBQyw4QkFBYSxDQUFDO29CQUM3RCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO2lCQUM1QixDQUFDOzt5QkFBQTtZQUNGLGlDQUEwQixDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29tbWl0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdENvbXBvbmVudH0gZnJvbSBcIi4vY29tbWl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdFNlcnZpY2V9IGZyb20gXCIuL2NvbW1pdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29tbWl0U2VhcmNoQ29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQvY29tbWl0LXNlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb21taXRTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQvY29tbWl0LXNlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QnJhbmNoU2VydmljZX0gZnJvbSBcIi4vYnJhbmNoL2JyYW5jaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QnJhbmNoQ29tcG9uZW50fSBmcm9tIFwiLi9icmFuY2gvYnJhbmNoLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0ICcuL3J4anMtZXh0ZW5zaW9ucyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIENvbW1pdERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBDb21taXRDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWl0U2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIEJyYW5jaENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtDb21taXRTZXJ2aWNlLCBDb21taXRTZWFyY2hTZXJ2aWNlLEJyYW5jaFNlcnZpY2VdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
