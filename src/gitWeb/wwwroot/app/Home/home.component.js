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
                <label>{{branch.name}} {{branch.isRemote}}</label>
              </div>
            </li>
          </ul>
    `
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof hello_service_1.HelloService !== 'undefined' && hello_service_1.HelloService) === 'function' && _a) || Object, (typeof (_b = typeof git_service_1.GitService !== 'undefined' && git_service_1.GitService) === 'function' && _b) || Object])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
    var _a, _b;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUNJLFlBQW9CLFlBQTBCLEVBQVUsVUFBc0I7b0JBQTFELGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBQzlFLENBQUM7Z0JBRUQsUUFBUTtvQkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFNRCxLQUFLLENBQUMsSUFBWTtvQkFDZCxJQUFJLENBQUMsWUFBWTt5QkFDWixLQUFLLENBQUMsSUFBSSxDQUFDO3lCQUNYLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO3lCQUNuQixTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsV0FBVyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4RixDQUFDO1lBN0NEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsd0JBQVUsQ0FBQztvQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0tBYVQ7aUJBQ0osQ0FBQzs7NkJBQUE7WUFDRix5Q0EyQkMsQ0FBQSIsImZpbGUiOiJhcHAvSG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SGVsbG9TZXJ2aWNlfSBmcm9tIFwiLi9oZWxsby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2l0U2VydmljZX0gZnJvbSBcIi4uL0dpdC9naXQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JyYW5jaH0gZnJvbSBcIi4uL0dpdC9Nb2RlbC9CcmFuY2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcclxuICAgIHByb3ZpZGVyczogW0hlbGxvU2VydmljZSwgR2l0U2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMT5HcmVldGluZyB0ZXN0PC9oMT5cclxuICAgICAgICB7e2dyZWV0aW5nfX1cclxuICAgICAgICAgICAgPGgxPiAgR0lUIExPRyA8L2gxPlxyXG4gICAgICAgIHt7Z2l0TG9nfX1cclxuICAgICAgICAgICAgPGgxPiAgR0lUIEJSQU5DSCBMSVNUIDwvaDE+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwidG9kby1saXN0XCI+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYnJhbmNoIG9mIGJyYW5jaExpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7YnJhbmNoLm5hbWV9fSB7e2JyYW5jaC5pc1JlbW90ZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVsbG9TZXJ2aWNlOiBIZWxsb1NlcnZpY2UsIHByaXZhdGUgZ2l0U2VydmljZTogR2l0U2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ3JlZXQoXCJNaWNoYWxcIik7XHJcbiAgICAgICAgdGhpcy5nZXRHaXRMb2coKTtcclxuICAgICAgICB0aGlzLmdldEJyYW5jaGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JlZXRpbmc6IHN0cmluZztcclxuICAgIGdpdExvZzogc3RyaW5nO1xyXG4gICAgYnJhbmNoTGlzdDogQnJhbmNoW107XHJcblxyXG4gICAgZ3JlZXQobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWxsb1NlcnZpY2VcclxuICAgICAgICAgICAgLmdyZWV0KG5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmdyZWV0aW5nID0gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2l0TG9nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2l0U2VydmljZS5nZXRMb2coKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHMgPT4gdGhpcy5naXRMb2cgPSBzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hlcygpIHsgdGhpcy5naXRTZXJ2aWNlLmdldEJyYW5jaGVzKCkuc3Vic2NyaWJlKHMgPT4gdGhpcy5icmFuY2hMaXN0ID0gcyk7IH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
