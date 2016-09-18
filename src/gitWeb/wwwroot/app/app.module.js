System.register(["@angular/core", "@angular/platform-browser", "./app.components", "@angular/http", "./commit-detail.component"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_components_1, http_1, commit_detail_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_components_1_1) {
                app_components_1 = app_components_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (commit_detail_component_1_1) {
                commit_detail_component_1 = commit_detail_component_1_1;
            }],
        execute: function() {
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        app_components_1.AppComponent,
                        commit_detail_component_1.CommitDetailComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule
                    ],
                    providers: [],
                    bootstrap: [app_components_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO1lBQXlCLENBQUM7WUFaMUI7Z0JBQUMsZUFBUSxDQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDViw2QkFBWTt3QkFDWiwrQ0FBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxnQ0FBYTt3QkFDYixpQkFBVTtxQkFDYjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixTQUFTLEVBQUUsQ0FBQyw2QkFBWSxDQUFDO2lCQUM1QixDQUFDOzt5QkFBQTtZQUNGLGlDQUEwQixDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gICBmcm9tIFwiLi9hcHAuY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29tbWl0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBDb21taXREZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
