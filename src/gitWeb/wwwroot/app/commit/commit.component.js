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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUNJLFlBQW9CLFVBQXlCLEVBQVUsYUFBNEI7b0JBQS9ELGVBQVUsR0FBVixVQUFVLENBQWU7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBSW5GLGFBQVEsR0FBWSxLQUFLLENBQUM7Z0JBRjFCLENBQUM7Z0JBU0QsUUFBUTtvQkFDSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzt3QkFFdkIsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7NEJBQ2hCLElBQUksd0JBQXdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUU3RSxFQUFFLENBQUEsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0NBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzRCQUNqRSxDQUFDO3dCQUNMLENBQUM7b0JBRUwsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxlQUFlO29CQUNmLHNDQUFzQztvQkFDdEMsbURBQW1EO29CQUMvQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsUUFBUSxDQUFDLE1BQWM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7eUJBQ25CLFNBQVMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQixvQkFBb0I7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUQsc0JBQXNCO2dCQUN0Qix5Q0FBeUM7Z0JBQ3pDLGlDQUFpQztnQkFDakMsdUNBQXVDO2dCQUN2QyxxRUFBcUU7Z0JBQ3JFLGNBQWM7Z0JBQ2QsUUFBUTtnQkFDUixJQUFJO2dCQUVKLFdBQVc7b0JBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQztZQUdMLENBQUM7WUFuRUQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsK0NBQStDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDakQsQ0FBQzs7K0JBQUE7WUFHRiw2Q0EyREMsQ0FBQTs7Ozs7QUFFRCw2QkFBNkIiLCJmaWxlIjoiYXBwL2NvbW1pdC9jb21taXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbW1pdCB9IGZyb20gXCIuLi9HaXQvTW9kZWwvQ29tbWl0XCI7XHJcbmltcG9ydCB7Q29tbWl0U2VydmljZX0gZnJvbSBcIi4vY29tbWl0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuLi9icmFuY2gvQnJhbmNoXCI7XHJcbmltcG9ydCB7QnJhbmNoU2VydmljZX0gZnJvbSBcIi4uL2JyYW5jaC9icmFuY2guc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21taXRzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbW1pdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAvLyB0ZW1wbGF0ZTogYDxjYW52YXMgaWQ9XCJnaXRHcmFwaFwiPjwvY2FudmFzPmAsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9jb21taXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1pdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdFNlcnZpY2U6IENvbW1pdFNlcnZpY2UsIHByaXZhdGUgYnJhbmNoU2VydmljZTogQnJhbmNoU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBjdXJyZW50QnJhbmNoOiBCcmFuY2g7XHJcbiAgICBjb21taXRzOiBDb21taXRbXTtcclxuICAgIHNlbGVjdGVkQ29tbWl0OiBDb21taXQ7XHJcbiAgICBnaXRncmFwaDogYW55O1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5icmFuY2hTZXJ2aWNlLmN1cnJlbnRCcmFuY2guc3Vic2NyaWJlKGIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCcmFuY2ggPSBiO1xyXG5cclxuICAgICAgICAgICAgaWYoYiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QnJhbmNoQ29tbWl0SW5kZXggPSB0aGlzLmNvbW1pdHMubWFwKHMgPT4gcy5pZCkuaW5kZXhPZihiLnRpcFNoYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEJyYW5jaENvbW1pdEluZGV4ID4gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21taXQgPSB0aGlzLmNvbW1pdHNbY3VycmVudEJyYW5jaENvbW1pdEluZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7IFxyXG4gICAgLy8gICAgIHRoaXMuZ2l0Z3JhcGggPSBuZXcgR2l0R3JhcGgoKTtcclxuICAgIC8vICAgICB2YXIgbWFzdGVyID0gdGhpcy5naXRncmFwaC5icmFuY2goXCJtYXN0ZXJcIik7XHJcbiAgICAgICAgdGhpcy5nZXRHaXRMb2coKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChjb21taXQ6IENvbW1pdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb21taXQgPSBjb21taXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2l0TG9nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2l0U2VydmljZS5nZXRMb2coKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXRzID0gcztcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXBoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXdHcmFwaCgpOiB2b2lkIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBjb21taXQgb2YgdGhpcy5jb21taXRzKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ2l0Z3JhcGguY29tbWl0KHtcclxuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2U6IGNvbW1pdC5tZXNzYWdlLFxyXG4gICAgLy8gICAgICAgICAgICAgYXV0aG9yOiBjb21taXQuYXV0aG9yLm5hbWUgKyBcIiBcIiArIGNvbW1pdC5hdXRob3IuZW1haWxcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLy8gZGVjbGFyZSB2YXIgR2l0R3JhcGg6IGFueTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
