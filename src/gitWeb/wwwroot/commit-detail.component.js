System.register(["@angular/core", "./commit.service"], function(exports_1, context_1) {
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
    var core_1, commit_service_1;
    var CommitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (commit_service_1_1) {
                commit_service_1 = commit_service_1_1;
            }],
        execute: function() {
            let CommitComponent = class CommitComponent {
                constructor(gitService) {
                    this.gitService = gitService;
                }
                ngOnInit() {
                    this.getGitLog();
                }
                onSelect(commit) {
                    this.selectedCommit = commit;
                }
                getGitLog() {
                    this.gitService.getLog()
                        .subscribe(s => this.commits = s);
                }
            };
            CommitComponent = __decorate([
                core_1.Component({
                    selector: "commits",
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
                __metadata('design:paramtypes', [(typeof (_a = typeof commit_service_1.CommitService !== 'undefined' && commit_service_1.CommitService) === 'function' && _a) || Object])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1pdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0VBO2dCQUNJLFlBQW9CLFVBQXlCO29CQUF6QixlQUFVLEdBQVYsVUFBVSxDQUFlO2dCQUU3QyxDQUFDO2dCQUVELFFBQVE7b0JBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQU1ELFFBQVEsQ0FBQyxNQUFjO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO3lCQUNuQixTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7WUFDTCxDQUFDO1lBeEZEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ3BCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaURQLENBQUM7b0JBQ0YsUUFBUSxFQUFFOzs7Ozs7Ozs7OztLQVdUO2lCQUNKLENBQUM7OytCQUFBO1lBR0YsNkNBcUJDLENBQUEiLCJmaWxlIjoiY29tbWl0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21taXR9IGZyb20gXCIuL0dpdC9Nb2RlbC9Db21taXRcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuL0dpdC9Nb2RlbC9CcmFuY2hcIjtcclxuaW1wb3J0IHtDb21taXRTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21taXRzXCIsXHJcbiAgIHN0eWxlczogW2BcclxuICAgICAgLnNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb21taXRMaXN0IHtcclxuICAgICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogNTVlbTtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCBsaSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgICAgICBoZWlnaHQ6IDIuMGVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCBsaS5zZWxlY3RlZDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCBsaTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgICBsZWZ0OiAuMWVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb21taXRMaXN0IC50ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb21taXRMaXN0IC5iYWRnZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICBoZWlnaHQ6IDIuMGVtO1xyXG4gICAgICAgIHdpZHRoOiAzMC4wZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxoMT4gIEdJVCBMT0cgPC9oMT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWl0TGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjb21taXQgb2YgY29tbWl0c1wiIChjbGljayk9XCJvblNlbGVjdChjb21taXQpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXSA9IFwiY29tbWl0ID09PSBzZWxlY3RlZENvbW1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e2NvbW1pdC5pZH19PC9zcGFuPiB7e2NvbW1pdC5tZXNzYWdlfX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8Y29tbWl0LWRldGFpbCBbY29tbWl0XT1cInNlbGVjdGVkQ29tbWl0XCI+PC9jb21taXQtZGV0YWlsPlxyXG5cclxuICAgIGBcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWl0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0U2VydmljZTogQ29tbWl0U2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0R2l0TG9nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tbWl0czogQ29tbWl0W107XHJcbiAgICBicmFuY2hMaXN0OiBCcmFuY2hbXTtcclxuICAgIHNlbGVjdGVkQ29tbWl0OiBDb21taXQ7XHJcblxyXG4gICAgb25TZWxlY3QoY29tbWl0OiBDb21taXQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29tbWl0ID0gY29tbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdpdExvZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdpdFNlcnZpY2UuZ2V0TG9nKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzID0+IHRoaXMuY29tbWl0cyA9IHMpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
