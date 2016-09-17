System.register(["@angular/core", "./hello.service", "../Git/git.service"], function(exports_1, context_1) {
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
    var core_1, hello_service_1, git_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            },
            function (git_service_1_1) {
                git_service_1 = git_service_1_1;
            }],
        execute: function() {
            let HomeComponent = class HomeComponent {
                constructor(helloService, gitService) {
                    this.helloService = helloService;
                    this.gitService = gitService;
                }
                ngOnInit() {
                    this.greet("Michal");
                    this.getGitLog();
                    this.getBranches();
                }
                greet(name) {
                    this.helloService
                        .greet(name)
                        .subscribe(data => this.greeting = data);
                }
                getGitLog() {
                    this.gitService.getLog()
                        .subscribe(s => this.gitLog = s);
                }
                getBranches() { this.gitService.getBranches().subscribe(s => this.branchList = s); }
            };
            HomeComponent = __decorate([
                core_1.Component({
                    selector: "app-home",
                    providers: [hello_service_1.HelloService, git_service_1.GitService],
                    template: `
        <h1>Greeting test</h1>
        {{greeting}}
            <h1>  GIT LOG </h1>
        {{gitLog}}
            <h1>  GIT BRANCH LIST </h1>
        <ul class="todo-list">
            <li *ngFor="let branch of branchList">
              <div class="view">
                <label>{{branch.name}}</label>
              </div>
            </li>
          </ul>
    `
                }), 
                __metadata('design:paramtypes', [hello_service_1.HelloService, git_service_1.GitService])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map