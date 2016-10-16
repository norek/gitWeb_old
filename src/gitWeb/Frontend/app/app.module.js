System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./commit/detail/commit-detail.component", "./app.component", "./commit/commit.component", "./commit/commit.service", "./commit/search/commit-search.component", "./commit/search/commit-search.service", "./branch/branch.service", "./branch/branch.component", "./tag/tag.component", './repository/repository.service', './shared/loader.service', './changes/changes.service', './changes/change-detail.component', './rxjs-extensions'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, commit_detail_component_1, app_component_1, commit_component_1, commit_service_1, commit_search_component_1, commit_search_service_1, branch_service_1, branch_component_1, tag_component_1, repository_service_1, loader_service_1, changes_service_1, change_detail_component_1;
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
            function (repository_service_1_1) {
                repository_service_1 = repository_service_1_1;
            },
            function (loader_service_1_1) {
                loader_service_1 = loader_service_1_1;
            },
            function (changes_service_1_1) {
                changes_service_1 = changes_service_1_1;
            },
            function (change_detail_component_1_1) {
                change_detail_component_1 = change_detail_component_1_1;
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
                        tag_component_1.TagComponent,
                        change_detail_component_1.ChangeDetailComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule
                    ],
                    providers: [commit_service_1.CommitService, commit_search_service_1.CommitSearchService, branch_service_1.BranchService, repository_service_1.RepositoryService, loader_service_1.LoaderService, changes_service_1.ChangeService],
                    bootstrap: [app_component_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map