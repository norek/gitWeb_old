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
                __metadata('design:paramtypes', [repository_service_1.RepositoryService, loader_service_1.LoaderService, changes_service_1.ChangeService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map