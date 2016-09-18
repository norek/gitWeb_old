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
                onSelect(commit) {
                    this.selectedCommit = commit;
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
                    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .commitList {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 55em;
      }
      .commitList li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 2.0em;
        border-radius: 4px;
      }
      .commitList li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .commitList li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .commitList .text {
        position: relative;
        top: -3px;
      }
      .commitList .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 2.0em;
        width: 30.0em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
                    providers: [git_service_1.GitService],
                    template: `
            <h1>  GIT LOG </h1>
            <ul class="commitList">
                <li *ngFor="let commit of commits" (click)="onSelect(commit)" 
                    [class.selected] = "commit === selectedCommit">
                    <span class="badge">{{commit.id}}</span> {{commit.message}}
                </li>
            </ul>

            <commit-detail [commit]="selectedCommit"></commit-detail>

    `
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof git_service_1.GitService !== 'undefined' && git_service_1.GitService) === 'function' && _a) || Object])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBFQTtnQkFDSSxZQUFvQixVQUFzQjtvQkFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtnQkFFMUMsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQU1ELFFBQVEsQ0FBQyxNQUFjO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO3lCQUNuQixTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsV0FBVyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4RixDQUFDO1lBOUZEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLEtBQUs7b0JBQ2hCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaURQLENBQUM7b0JBRUYsU0FBUyxFQUFFLENBQUMsd0JBQVUsQ0FBQztvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztLQVdUO2lCQUNKLENBQUM7OzRCQUFBO1lBR0YsdUNBeUJDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtHaXRTZXJ2aWNlfSBmcm9tIFwiLi9HaXQvZ2l0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb21taXR9IGZyb20gXCIuL0dpdC9Nb2RlbC9Db21taXRcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuL0dpdC9Nb2RlbC9CcmFuY2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwXCIsXHJcbiAgIHN0eWxlczogW2BcclxuICAgICAgLnNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb21taXRMaXN0IHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogNTVlbTtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCBsaSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgICAgICBoZWlnaHQ6IDIuMGVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCBsaS5zZWxlY3RlZDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCBsaTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgICBsZWZ0OiAuMWVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb21taXRMaXN0IC50ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb21taXRMaXN0IC5iYWRnZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICBoZWlnaHQ6IDIuMGVtO1xyXG4gICAgICAgIHdpZHRoOiAzMC4wZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXVxyXG4sXHJcbiAgICBwcm92aWRlcnM6IFtHaXRTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxoMT4gIEdJVCBMT0cgPC9oMT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWl0TGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjb21taXQgb2YgY29tbWl0c1wiIChjbGljayk9XCJvblNlbGVjdChjb21taXQpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXSA9IFwiY29tbWl0ID09PSBzZWxlY3RlZENvbW1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e2NvbW1pdC5pZH19PC9zcGFuPiB7e2NvbW1pdC5tZXNzYWdlfX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8Y29tbWl0LWRldGFpbCBbY29tbWl0XT1cInNlbGVjdGVkQ29tbWl0XCI+PC9jb21taXQtZGV0YWlsPlxyXG5cclxuICAgIGBcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0U2VydmljZTogR2l0U2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0R2l0TG9nKCk7XHJcbiAgICAgICAgdGhpcy5nZXRCcmFuY2hlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbW1pdHM6IENvbW1pdFtdO1xyXG4gICAgYnJhbmNoTGlzdDogQnJhbmNoW107XHJcbiAgICBzZWxlY3RlZENvbW1pdDogQ29tbWl0O1xyXG5cclxuICAgIG9uU2VsZWN0KGNvbW1pdDogQ29tbWl0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbW1pdCA9IGNvbW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHaXRMb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5naXRTZXJ2aWNlLmdldExvZygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocyA9PiB0aGlzLmNvbW1pdHMgPSBzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hlcygpIHsgdGhpcy5naXRTZXJ2aWNlLmdldEJyYW5jaGVzKCkuc3Vic2NyaWJlKHMgPT4gdGhpcy5icmFuY2hMaXN0ID0gcyk7IH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
