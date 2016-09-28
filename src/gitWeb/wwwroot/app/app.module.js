System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./commit/detail/commit-detail.component", "./app.component", "./commit/commit.component", "./commit/commit.service", "./commit/search/commit-search.component", "./commit/search/commit-search.service", "./branch/branch.service", "./branch/branch.component", "./tag/tag.component", './rxjs-extensions'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, commit_detail_component_1, app_component_1, commit_component_1, commit_service_1, commit_search_component_1, commit_search_service_1, branch_service_1, branch_component_1, tag_component_1;
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
            function (tag_component_1_1) {
                tag_component_1 = tag_component_1_1;
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
                        branch_component_1.BranchComponent,
                        tag_component_1.TagComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStCQTtZQUF5QixDQUFDO1lBaEIxQjtnQkFBQyxlQUFRLENBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDRCQUFZO3dCQUNaLCtDQUFxQjt3QkFDckIsa0NBQWU7d0JBQ2YsK0NBQXFCO3dCQUNyQixrQ0FBZTt3QkFDZiw0QkFBWTtxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0NBQWE7d0JBQ2IsaUJBQVU7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSwyQ0FBbUIsRUFBQyw4QkFBYSxDQUFDO29CQUM3RCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO2lCQUM1QixDQUFDOzt5QkFBQTtZQUNGLGlDQUEwQixDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29tbWl0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQvZGV0YWlsL2NvbW1pdC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29tbWl0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQvY29tbWl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdFNlcnZpY2V9IGZyb20gXCIuL2NvbW1pdC9jb21taXQuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbW1pdFNlYXJjaENvbXBvbmVudH0gZnJvbSBcIi4vY29tbWl0L3NlYXJjaC9jb21taXQtc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdFNlYXJjaFNlcnZpY2V9IGZyb20gXCIuL2NvbW1pdC9zZWFyY2gvY29tbWl0LXNlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QnJhbmNoU2VydmljZX0gZnJvbSBcIi4vYnJhbmNoL2JyYW5jaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QnJhbmNoQ29tcG9uZW50fSBmcm9tIFwiLi9icmFuY2gvYnJhbmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhZ0NvbXBvbmVudH0gZnJvbSBcIi4vdGFnL3RhZy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCAnLi9yeGpzLWV4dGVuc2lvbnMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBDb21taXREZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWl0Q29tcG9uZW50LFxyXG4gICAgICAgIENvbW1pdFNlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBCcmFuY2hDb21wb25lbnQsXHJcbiAgICAgICAgVGFnQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0NvbW1pdFNlcnZpY2UsIENvbW1pdFNlYXJjaFNlcnZpY2UsQnJhbmNoU2VydmljZV0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
