System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./commit-detail.component", "./app.component", "./commit.component", "./commit.service", "./commit/commit-search.component", "./commit/commit-search.service", './rxjs-extensions'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, commit_detail_component_1, app_component_1, commit_component_1, commit_service_1, commit_search_component_1, commit_search_service_1;
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
                        commit_search_component_1.CommitSearchComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule
                    ],
                    providers: [commit_service_1.CommitService, commit_search_service_1.CommitSearchService],
                    bootstrap: [app_component_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBCQTtZQUF5QixDQUFDO1lBZDFCO2dCQUFDLGVBQVEsQ0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsNEJBQVk7d0JBQ1osK0NBQXFCO3dCQUNyQixrQ0FBZTt3QkFDZiwrQ0FBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxnQ0FBYTt3QkFDYixpQkFBVTtxQkFDYjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDJDQUFtQixDQUFDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO2lCQUM1QixDQUFDOzt5QkFBQTtZQUNGLGlDQUEwQixDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29tbWl0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdENvbXBvbmVudH0gZnJvbSBcIi4vY29tbWl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdFNlcnZpY2V9IGZyb20gXCIuL2NvbW1pdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29tbWl0U2VhcmNoQ29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQvY29tbWl0LXNlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb21taXRTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQvY29tbWl0LXNlYXJjaC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgJy4vcnhqcy1leHRlbnNpb25zJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWl0RGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIENvbW1pdENvbXBvbmVudCxcclxuICAgICAgICBDb21taXRTZWFyY2hDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29tbWl0U2VydmljZSwgQ29tbWl0U2VhcmNoU2VydmljZV0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
