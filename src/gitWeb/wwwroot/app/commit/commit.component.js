System.register(["@angular/core", "./commit.service", "../branch/branch.service"], function(exports_1, context_1) {
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
    var core_1, commit_service_1, branch_service_1;
    var CommitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (commit_service_1_1) {
                commit_service_1 = commit_service_1_1;
            },
            function (branch_service_1_1) {
                branch_service_1 = branch_service_1_1;
            }],
        execute: function() {
            let CommitComponent = class CommitComponent {
                constructor(gitService, branchService) {
                    this.gitService = gitService;
                    this.branchService = branchService;
                    this.loggedIn = false;
                }
                ngOnInit() {
                    this.subscription = this.branchService.currentBranch.subscribe(b => {
                        this.currentBranch = b;
                        if (b !== undefined) {
                            let currentBranchCommitIndex = this.commits.map(s => s.id).indexOf(b.tipSha);
                            if (currentBranchCommitIndex > -1) {
                                this.selectedCommit = this.commits[currentBranchCommitIndex];
                            }
                        }
                    });
                }
                ngAfterViewInit() {
                    //     this.gitgraph = new GitGraph();
                    //     var master = this.gitgraph.branch("master");
                    this.getGitLog();
                    //changes changes changes
                }
                onSelect(commit) {
                    this.selectedCommit = commit;
                }
                getGitLog() {
                    this.gitService.getLog()
                        .subscribe(s => {
                        this.commits = s;
                        // this.drawGraph();
                    });
                }
                // drawGraph(): void {
                //     for (let commit of this.commits) {
                //         this.gitgraph.commit({
                //             message: commit.message,
                //             author: commit.author.name + " " + commit.author.email
                //         });
                //     }
                // }
                ngOnDestroy() {
                    this.subscription.unsubscribe();
                }
            };
            CommitComponent = __decorate([
                core_1.Component({
                    selector: "commits",
                    templateUrl: 'commit.component.html',
                    // template: `<canvas id="gitGraph"></canvas>`,
                    styleUrls: ['app/Styles/commit.component.css']
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof commit_service_1.CommitService !== 'undefined' && commit_service_1.CommitService) === 'function' && _a) || Object, (typeof (_b = typeof branch_service_1.BranchService !== 'undefined' && branch_service_1.BranchService) === 'function' && _b) || Object])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
    var _a, _b;
});
// declare var GitGraph: any; 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUNJLFlBQW9CLFVBQXlCLEVBQVUsYUFBNEI7b0JBQS9ELGVBQVUsR0FBVixVQUFVLENBQWU7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBSW5GLGFBQVEsR0FBWSxLQUFLLENBQUM7Z0JBRjFCLENBQUM7Z0JBU0QsUUFBUTtvQkFDSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzt3QkFFdkIsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7NEJBQ2hCLElBQUksd0JBQXdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUU3RSxFQUFFLENBQUEsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0NBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzRCQUNqRSxDQUFDO3dCQUNMLENBQUM7b0JBRUwsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxlQUFlO29CQUNmLHNDQUFzQztvQkFDdEMsbURBQW1EO29CQUMvQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBRWpCLHlCQUF5QjtnQkFDN0IsQ0FBQztnQkFFRCxRQUFRLENBQUMsTUFBYztvQkFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsU0FBUztvQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTt5QkFDbkIsU0FBUyxDQUFDLENBQUM7d0JBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBQ2pCLG9CQUFvQjtvQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxzQkFBc0I7Z0JBQ3RCLHlDQUF5QztnQkFDekMsaUNBQWlDO2dCQUNqQyx1Q0FBdUM7Z0JBQ3ZDLHFFQUFxRTtnQkFDckUsY0FBYztnQkFDZCxRQUFRO2dCQUNSLElBQUk7Z0JBRUosV0FBVztvQkFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNwQyxDQUFDO1lBR0wsQ0FBQztZQXJFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQywrQ0FBK0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUNqRCxDQUFDOzsrQkFBQTtZQUdGLDZDQTZEQyxDQUFBOzs7OztBQUVELDZCQUE2QiIsImZpbGUiOiJhcHAvY29tbWl0L2NvbW1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tbWl0IH0gZnJvbSBcIi4uL0dpdC9Nb2RlbC9Db21taXRcIjtcclxuaW1wb3J0IHtDb21taXRTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JyYW5jaH0gZnJvbSBcIi4uL2JyYW5jaC9CcmFuY2hcIjtcclxuaW1wb3J0IHtCcmFuY2hTZXJ2aWNlfSBmcm9tIFwiLi4vYnJhbmNoL2JyYW5jaC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNvbW1pdHNcIixcclxuICAgIHRlbXBsYXRlVXJsOiAnY29tbWl0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIC8vIHRlbXBsYXRlOiBgPGNhbnZhcyBpZD1cImdpdEdyYXBoXCI+PC9jYW52YXM+YCxcclxuICAgIHN0eWxlVXJsczogWydhcHAvU3R5bGVzL2NvbW1pdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWl0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0U2VydmljZTogQ29tbWl0U2VydmljZSwgcHJpdmF0ZSBicmFuY2hTZXJ2aWNlOiBCcmFuY2hTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlZEluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIGN1cnJlbnRCcmFuY2g6IEJyYW5jaDtcclxuICAgIGNvbW1pdHM6IENvbW1pdFtdO1xyXG4gICAgc2VsZWN0ZWRDb21taXQ6IENvbW1pdDtcclxuICAgIGdpdGdyYXBoOiBhbnk7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJyYW5jaFNlcnZpY2UuY3VycmVudEJyYW5jaC5zdWJzY3JpYmUoYiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJyYW5jaCA9IGI7XHJcblxyXG4gICAgICAgICAgICBpZihiICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRCcmFuY2hDb21taXRJbmRleCA9IHRoaXMuY29tbWl0cy5tYXAocyA9PiBzLmlkKS5pbmRleE9mKGIudGlwU2hhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50QnJhbmNoQ29tbWl0SW5kZXggPiAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbW1pdCA9IHRoaXMuY29tbWl0c1tjdXJyZW50QnJhbmNoQ29tbWl0SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgXHJcbiAgICAvLyAgICAgdGhpcy5naXRncmFwaCA9IG5ldyBHaXRHcmFwaCgpO1xyXG4gICAgLy8gICAgIHZhciBtYXN0ZXIgPSB0aGlzLmdpdGdyYXBoLmJyYW5jaChcIm1hc3RlclwiKTtcclxuICAgICAgICB0aGlzLmdldEdpdExvZygpO1xyXG5cclxuICAgICAgICAvL2NoYW5nZXMgY2hhbmdlcyBjaGFuZ2VzXHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoY29tbWl0OiBDb21taXQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29tbWl0ID0gY29tbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdpdExvZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdpdFNlcnZpY2UuZ2V0TG9nKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0cyA9IHM7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFwaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3R3JhcGgoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgY29tbWl0IG9mIHRoaXMuY29tbWl0cykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdpdGdyYXBoLmNvbW1pdCh7XHJcbiAgICAvLyAgICAgICAgICAgICBtZXNzYWdlOiBjb21taXQubWVzc2FnZSxcclxuICAgIC8vICAgICAgICAgICAgIGF1dGhvcjogY29tbWl0LmF1dGhvci5uYW1lICsgXCIgXCIgKyBjb21taXQuYXV0aG9yLmVtYWlsXHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGRlY2xhcmUgdmFyIEdpdEdyYXBoOiBhbnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
