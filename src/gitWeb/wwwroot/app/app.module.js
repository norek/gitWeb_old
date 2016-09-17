System.register(["@angular/core", "@angular/platform-browser", "./app.components", "./home/home.component", "./app.routes", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_components_1, home_component_1, app_routes_1, http_1;
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
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        app_components_1.AppComponent,
                        home_component_1.HomeComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule,
                        app_routes_1.routing
                    ],
                    providers: [],
                    bootstrap: [app_components_1.AppComponent],
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO1lBQXlCLENBQUM7WUFkMUI7Z0JBQUMsZUFBUSxDQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDViw2QkFBWTt3QkFDWiw4QkFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGdDQUFhO3dCQUNiLGlCQUFVO3dCQUNWLG9CQUFPO3FCQUNWO29CQUNELFNBQVMsRUFBRSxFQUNWO29CQUNELFNBQVMsRUFBRSxDQUFDLDZCQUFZLENBQUM7aUJBQzVCLENBQUM7O3lCQUFBO1lBQ0YsaUNBQTBCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSAgIGZyb20gXCIuL2FwcC5jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3JvdXRpbmd9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICByb3V0aW5nXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
