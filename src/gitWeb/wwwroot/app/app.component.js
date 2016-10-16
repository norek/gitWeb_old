System.register(["@angular/core", './repository/repository.service', './shared/loader.service', './changes/changes.service'], function(exports_1, context_1) {
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
    var core_1, repository_service_1, loader_service_1, changes_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (repository_service_1_1) {
                repository_service_1 = repository_service_1_1;
            },
            function (loader_service_1_1) {
                loader_service_1 = loader_service_1_1;
            },
            function (changes_service_1_1) {
                changes_service_1 = changes_service_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(repositoryService, loaderService, changeService) {
                    this.repositoryService = repositoryService;
                    this.loaderService = loaderService;
                    this.changeService = changeService;
                    this.loader = loaderService.loader;
                    this.inProgress = false;
                    this.showChanges = false;
                }
                ngOnInit() {
                    this.changeService.getChanges().subscribe(result => this.fileChanges = result);
                }
                ngAfterViewInit() {
                    setTimeout(function () {
                        componentHandler.upgradeAllRegistered();
                    });
                }
                closePreview() {
                    this.showChanges = false;
                }
                onSelect(fileChange) {
                    this.selectedChange = fileChange;
                    this.showChanges = true;
                }
                fetch() {
                    this.inProgress = true;
                    this.repositoryService.fetch().subscribe((s) => {
                        console.log('fetch end');
                        this.inProgress = false;
                    });
                }
                pull() {
                    this.inProgress = true;
                    this.repositoryService.pull().subscribe((s) => {
                        console.log(JSON.stringify(s));
                        this.inProgress = false;
                    });
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    styleUrls: ['app/Styles/app.component.css'],
                    templateUrl: 'app/app.component.html'
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof repository_service_1.RepositoryService !== 'undefined' && repository_service_1.RepositoryService) === 'function' && _a) || Object, (typeof (_b = typeof loader_service_1.LoaderService !== 'undefined' && loader_service_1.LoaderService) === 'function' && _b) || Object, (typeof (_c = typeof changes_service_1.ChangeService !== 'undefined' && changes_service_1.ChangeService) === 'function' && _c) || Object])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
    var _a, _b, _c;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBUUksWUFBbUIsaUJBQW9DLEVBQzNDLGFBQTRCLEVBQzVCLGFBQTRCO29CQUZyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO29CQUMzQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELFFBQVE7b0JBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBRUQsZUFBZTtvQkFDWCxVQUFVLENBQUM7d0JBQ1AsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxZQUFZO29CQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELFFBQVEsQ0FBQyxVQUFzQjtvQkFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELEtBQUs7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCxJQUFJO29CQUNBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBRUwsQ0FBQztZQXhERDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxLQUFLO29CQUNmLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUMzQyxXQUFXLEVBQUUsd0JBQXdCO2lCQUN4QyxDQUFDOzs0QkFBQTtZQUNGLHVDQW1EQyxDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkluaXQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSZXBvc2l0b3J5U2VydmljZX0gZnJvbSAnLi9yZXBvc2l0b3J5L3JlcG9zaXRvcnkuc2VydmljZSc7XHJcbmltcG9ydCB7TG9hZGVyU2VydmljZSwgSUxvYWRlcn0gZnJvbSAnLi9zaGFyZWQvbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NoYW5nZVNlcnZpY2UsIEZpbGVDaGFuZ2UsIEZpbGVDaGFuZ2VEZXRhaWx9IGZyb20gJy4vY2hhbmdlcy9jaGFuZ2VzLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgY29tcG9uZW50SGFuZGxlcjogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9hcHAuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgICBsb2FkZXI6IElMb2FkZXI7XHJcbiAgICBpblByb2dyZXNzOiBib29sZWFuO1xyXG4gICAgZmlsZUNoYW5nZXM6IEZpbGVDaGFuZ2VbXTtcclxuICAgIHNlbGVjdGVkQ2hhbmdlOkZpbGVDaGFuZ2U7XHJcbiAgICBzaG93Q2hhbmdlczogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVwb3NpdG9yeVNlcnZpY2U6IFJlcG9zaXRvcnlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9hZGVyU2VydmljZTogTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNoYW5nZVNlcnZpY2U6IENoYW5nZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlclNlcnZpY2UubG9hZGVyO1xyXG4gICAgICAgIHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0NoYW5nZXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVNlcnZpY2UuZ2V0Q2hhbmdlcygpLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5maWxlQ2hhbmdlcyA9IHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVBbGxSZWdpc3RlcmVkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQcmV2aWV3KCk6dm9pZHtcclxuICAgICAgICB0aGlzLnNob3dDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoZmlsZUNoYW5nZTogRmlsZUNoYW5nZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UgPSBmaWxlQ2hhbmdlO1xyXG4gICAgICAgIHRoaXMuc2hvd0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5U2VydmljZS5mZXRjaCgpLnN1YnNjcmliZSgocykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggZW5kJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVsbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVwb3NpdG9yeVNlcnZpY2UucHVsbCgpLnN1YnNjcmliZSgocykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
