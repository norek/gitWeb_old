System.register(["@angular/core", "./commit.service", "../branch/Branch.Service"], function(exports_1, context_1) {
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
    var core_1, commit_service_1, Branch_Service_1;
    var CommitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (commit_service_1_1) {
                commit_service_1 = commit_service_1_1;
            },
            function (Branch_Service_1_1) {
                Branch_Service_1 = Branch_Service_1_1;
            }],
        execute: function() {
            let CommitComponent = class CommitComponent {
                constructor(gitService, branchService) {
                    this.gitService = gitService;
                    this.branchService = branchService;
                }
                ngOnInit() {
                    this.getGitLog();
                    this.subscription = this.branchService.currentBranch.subscribe(b => { this.currentBranch = b; });
                }
                ngAfterViewInit() {
                    this.gitgraph = new GitGraph();
                    var master = this.gitgraph.branch("master");
                    this.gitgraph.commit('s');
                }
                onSelect(commit) {
                    this.selectedCommit = commit;
                }
                getGitLog() {
                    this.gitService.getLog()
                        .subscribe(s => this.commits = s);
                }
                ngOnDestroy() {
                    this.subscription.unsubscribe();
                }
            };
            CommitComponent = __decorate([
                core_1.Component({
                    selector: "commits",
                    // templateUrl: 'commit.component.html',
                    template: `<canvas id="gitGraph"></canvas>`,
                    styleUrls: ['app/Styles/commit.component.css'],
                    providers: [Branch_Service_1.BranchService]
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof commit_service_1.CommitService !== 'undefined' && commit_service_1.CommitService) === 'function' && _a) || Object, (typeof (_b = typeof Branch_Service_1.BranchService !== 'undefined' && Branch_Service_1.BranchService) === 'function' && _b) || Object])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
    var _a, _b;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUNJLFlBQW9CLFVBQXlCLEVBQVUsYUFBNEI7b0JBQS9ELGVBQVUsR0FBVixVQUFVLENBQWU7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7Z0JBRW5GLENBQUM7Z0JBUUQsUUFBUTtvQkFDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVwRyxDQUFDO2dCQUVELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO29CQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRTlCLENBQUM7Z0JBRUQsUUFBUSxDQUFDLE1BQWM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7eUJBQ25CLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxXQUFXO29CQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3BDLENBQUM7WUFHTCxDQUFDO1lBL0NEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLHdDQUF3QztvQkFDeEMsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7aUJBQzdCLENBQUM7OytCQUFBO1lBR0YsNkNBc0NDLENBQUEiLCJmaWxlIjoiYXBwL2NvbW1pdC9jb21taXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbW1pdCB9IGZyb20gXCIuLi9HaXQvTW9kZWwvQ29tbWl0XCI7XHJcbmltcG9ydCB7Q29tbWl0U2VydmljZX0gZnJvbSBcIi4vY29tbWl0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuLi9icmFuY2gvQnJhbmNoXCI7XHJcbmltcG9ydCB7QnJhbmNoU2VydmljZX0gZnJvbSBcIi4uL2JyYW5jaC9CcmFuY2guU2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21taXRzXCIsXHJcbiAgICAvLyB0ZW1wbGF0ZVVybDogJ2NvbW1pdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxjYW52YXMgaWQ9XCJnaXRHcmFwaFwiPjwvY2FudmFzPmAsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9jb21taXQuY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbQnJhbmNoU2VydmljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWl0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0U2VydmljZTogQ29tbWl0U2VydmljZSwgcHJpdmF0ZSBicmFuY2hTZXJ2aWNlOiBCcmFuY2hTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmlwdGlvbjogYW55O1xyXG4gICAgY3VycmVudEJyYW5jaDogQnJhbmNoO1xyXG4gICAgY29tbWl0czogQ29tbWl0W107XHJcbiAgICBzZWxlY3RlZENvbW1pdDogQ29tbWl0O1xyXG4gICAgZ2l0Z3JhcGg6YW55O1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0R2l0TG9nKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJyYW5jaFNlcnZpY2UuY3VycmVudEJyYW5jaC5zdWJzY3JpYmUoYiA9PiB7IHRoaXMuY3VycmVudEJyYW5jaCA9IGIgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgLy8gd2FpdCBmb3IgdGhlIHZpZXcgdG8gaW5pdCBiZWZvcmUgdXNpbmcgdGhlIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmdpdGdyYXBoID0gbmV3IEdpdEdyYXBoKCk7XHJcbiAgICAgICAgdmFyIG1hc3RlciA9IHRoaXMuZ2l0Z3JhcGguYnJhbmNoKFwibWFzdGVyXCIpO1xyXG4gICAgICAgIHRoaXMuZ2l0Z3JhcGguY29tbWl0KCdzJyk7ICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoY29tbWl0OiBDb21taXQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29tbWl0ID0gY29tbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdpdExvZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdpdFNlcnZpY2UuZ2V0TG9nKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzID0+IHRoaXMuY29tbWl0cyA9IHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5kZWNsYXJlIHZhciBHaXRHcmFwaDphbnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
