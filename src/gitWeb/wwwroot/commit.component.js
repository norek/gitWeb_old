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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3RUE7Z0JBQ0ksWUFBb0IsVUFBeUI7b0JBQXpCLGVBQVUsR0FBVixVQUFVLENBQWU7Z0JBRTdDLENBQUM7Z0JBRUQsUUFBUTtvQkFDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBTUQsUUFBUSxDQUFDLE1BQWM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7eUJBQ25CLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztZQUNMLENBQUM7WUF4RkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDcEIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpRFAsQ0FBQztvQkFDRixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0tBV1Q7aUJBQ0osQ0FBQzs7K0JBQUE7WUFHRiw2Q0FxQkMsQ0FBQSIsImZpbGUiOiJjb21taXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tbWl0fSBmcm9tIFwiLi9HaXQvTW9kZWwvQ29tbWl0XCI7XHJcbmltcG9ydCB7QnJhbmNofSBmcm9tIFwiLi9HaXQvTW9kZWwvQnJhbmNoXCI7XHJcbmltcG9ydCB7Q29tbWl0U2VydmljZX0gZnJvbSBcIi4vY29tbWl0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29tbWl0c1wiLFxyXG4gICBzdHlsZXM6IFtgXHJcbiAgICAgIC5zZWxlY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDU1ZW07XHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1pdExpc3QgbGkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gICAgICAgIG1hcmdpbjogLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjBlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1pdExpc3QgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbW1pdExpc3QgbGk6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICAgICAgbGVmdDogLjFlbTtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCAudGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTNweDtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWl0TGlzdCAuYmFkZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjBlbTtcclxuICAgICAgICB3aWR0aDogMzAuMGVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgICAgfVxyXG4gICAgYF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8aDE+ICBHSVQgTE9HIDwvaDE+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1pdExpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgY29tbWl0IG9mIGNvbW1pdHNcIiAoY2xpY2spPVwib25TZWxlY3QoY29tbWl0KVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF0gPSBcImNvbW1pdCA9PT0gc2VsZWN0ZWRDb21taXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3tjb21taXQuaWR9fTwvc3Bhbj4ge3tjb21taXQubWVzc2FnZX19XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGNvbW1pdC1kZXRhaWwgW2NvbW1pdF09XCJzZWxlY3RlZENvbW1pdFwiPjwvY29tbWl0LWRldGFpbD5cclxuXHJcbiAgICBgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1pdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdFNlcnZpY2U6IENvbW1pdFNlcnZpY2UpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEdpdExvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbW1pdHM6IENvbW1pdFtdO1xyXG4gICAgYnJhbmNoTGlzdDogQnJhbmNoW107XHJcbiAgICBzZWxlY3RlZENvbW1pdDogQ29tbWl0O1xyXG5cclxuICAgIG9uU2VsZWN0KGNvbW1pdDogQ29tbWl0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbW1pdCA9IGNvbW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHaXRMb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5naXRTZXJ2aWNlLmdldExvZygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocyA9PiB0aGlzLmNvbW1pdHMgPSBzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
