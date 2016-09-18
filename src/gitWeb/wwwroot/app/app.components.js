System.register(["@angular/core", "./Git/git.service"], function(exports_1, context_1) {
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
    var core_1, git_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (git_service_1_1) {
                git_service_1 = git_service_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(gitService) {
                    this.gitService = gitService;
                }
                ngOnInit() {
                    this.getGitLog();
                    this.getBranches();
                }
                getGitLog() {
                    this.gitService.getLog()
                        .subscribe(s => this.commits = s);
                }
                getBranches() { this.gitService.getBranches().subscribe(s => this.branchList = s); }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: "app",
                    providers: [git_service_1.GitService],
                    template: `
        <h1>  GIT LOG </h1>
        <ul>
            <li *ngFor="let commit of commits">
                <div class="view">
                    <label>{{commit.message}} {{commit.id}}</label>
                </div></li>
        </ul>
                {{gitLog}}
            <h1>  GIT BRANCH LIST </h1>
        <ul class="branchList">
            <li *ngFor="let branch of branchList">
              <div class="view">
                <label>{{branch.name}} {{branch.isRemote}}</label>
              </div>
            </li>
          </ul>
    `
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof git_service_1.GitService !== 'undefined' && git_service_1.GitService) === 'function' && _a) || Object])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFDSSxZQUFvQixVQUFzQjtvQkFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtnQkFFMUMsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUtELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7eUJBQ25CLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxXQUFXLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhGLENBQUM7WUE1Q0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsS0FBSztvQkFDZixTQUFTLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJUO2lCQUNKLENBQUM7OzRCQUFBO1lBR0YsdUNBb0JDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtHaXRTZXJ2aWNlfSBmcm9tIFwiLi9HaXQvZ2l0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb21taXR9IGZyb20gXCIuL0dpdC9Nb2RlbC9Db21taXRcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuL0dpdC9Nb2RlbC9CcmFuY2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtHaXRTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPiAgR0lUIExPRyA8L2gxPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjb21taXQgb2YgY29tbWl0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3tjb21taXQubWVzc2FnZX19IHt7Y29tbWl0LmlkfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAge3tnaXRMb2d9fVxyXG4gICAgICAgICAgICA8aDE+ICBHSVQgQlJBTkNIIExJU1QgPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3M9XCJicmFuY2hMaXN0XCI+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgYnJhbmNoIG9mIGJyYW5jaExpc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7YnJhbmNoLm5hbWV9fSB7e2JyYW5jaC5pc1JlbW90ZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdFNlcnZpY2U6IEdpdFNlcnZpY2UpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEdpdExvZygpO1xyXG4gICAgICAgIHRoaXMuZ2V0QnJhbmNoZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21taXRzOiBDb21taXRbXTtcclxuICAgIGJyYW5jaExpc3Q6IEJyYW5jaFtdO1xyXG5cclxuICAgIGdldEdpdExvZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdpdFNlcnZpY2UuZ2V0TG9nKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzID0+IHRoaXMuY29tbWl0cyA9IHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyYW5jaGVzKCkgeyB0aGlzLmdpdFNlcnZpY2UuZ2V0QnJhbmNoZXMoKS5zdWJzY3JpYmUocyA9PiB0aGlzLmJyYW5jaExpc3QgPSBzKTsgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
