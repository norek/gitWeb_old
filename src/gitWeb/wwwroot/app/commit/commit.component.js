System.register(["@angular/core", "./commit.service", "../branch/branch.service", "../shared/loader.service"], function(exports_1, context_1) {
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
    var core_1, commit_service_1, branch_service_1, loader_service_1;
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
            },
            function (loader_service_1_1) {
                loader_service_1 = loader_service_1_1;
            }],
        execute: function() {
            let CommitComponent = class CommitComponent {
                constructor(gitService, branchService, loaderService) {
                    this.gitService = gitService;
                    this.branchService = branchService;
                    this.loaderService = loaderService;
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
                    this.loaderService.showLoader();
                    this.gitService.getLog()
                        .subscribe(result => {
                        this.commits = result;
                        this.loaderService.hideLoader();
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
                __metadata('design:paramtypes', [(typeof (_a = typeof commit_service_1.CommitService !== 'undefined' && commit_service_1.CommitService) === 'function' && _a) || Object, (typeof (_b = typeof branch_service_1.BranchService !== 'undefined' && branch_service_1.BranchService) === 'function' && _b) || Object, (typeof (_c = typeof loader_service_1.LoaderService !== 'undefined' && loader_service_1.LoaderService) === 'function' && _c) || Object])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
    var _a, _b, _c;
});
// declare var GitGraph: any; 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUNJLFlBQW9CLFVBQXlCLEVBQVUsYUFBNEIsRUFBVSxhQUE0QjtvQkFBckcsZUFBVSxHQUFWLFVBQVUsQ0FBZTtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFJekgsYUFBUSxHQUFZLEtBQUssQ0FBQztnQkFGMUIsQ0FBQztnQkFTRCxRQUFRO29CQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO3dCQUV2QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDbEIsSUFBSSx3QkFBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBRTdFLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7NEJBQ2pFLENBQUM7d0JBQ0wsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGVBQWU7b0JBQ1gsc0NBQXNDO29CQUN0QyxtREFBbUQ7b0JBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFFakIseUJBQXlCO2dCQUM3QixDQUFDO2dCQUVELFFBQVEsQ0FBQyxNQUFjO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO3lCQUNuQixTQUFTLENBQUMsTUFBTTt3QkFDYixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxzQkFBc0I7Z0JBQ3RCLHlDQUF5QztnQkFDekMsaUNBQWlDO2dCQUNqQyx1Q0FBdUM7Z0JBQ3ZDLHFFQUFxRTtnQkFDckUsY0FBYztnQkFDZCxRQUFRO2dCQUNSLElBQUk7Z0JBRUosV0FBVztvQkFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNwQyxDQUFDO1lBR0wsQ0FBQztZQXRFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQywrQ0FBK0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUNqRCxDQUFDOzsrQkFBQTtZQUdGLDZDQThEQyxDQUFBOzs7OztBQUVELDZCQUE2QiIsImZpbGUiOiJhcHAvY29tbWl0L2NvbW1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tbWl0IH0gZnJvbSBcIi4uL0dpdC9Nb2RlbC9Db21taXRcIjtcclxuaW1wb3J0IHtDb21taXRTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JyYW5jaH0gZnJvbSBcIi4uL2JyYW5jaC9CcmFuY2hcIjtcclxuaW1wb3J0IHtCcmFuY2hTZXJ2aWNlfSBmcm9tIFwiLi4vYnJhbmNoL2JyYW5jaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TG9hZGVyU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9sb2FkZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21taXRzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbW1pdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAvLyB0ZW1wbGF0ZTogYDxjYW52YXMgaWQ9XCJnaXRHcmFwaFwiPjwvY2FudmFzPmAsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9jb21taXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1pdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdFNlcnZpY2U6IENvbW1pdFNlcnZpY2UsIHByaXZhdGUgYnJhbmNoU2VydmljZTogQnJhbmNoU2VydmljZSwgcHJpdmF0ZSBsb2FkZXJTZXJ2aWNlOiBMb2FkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlZEluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIGN1cnJlbnRCcmFuY2g6IEJyYW5jaDtcclxuICAgIGNvbW1pdHM6IENvbW1pdFtdO1xyXG4gICAgc2VsZWN0ZWRDb21taXQ6IENvbW1pdDtcclxuICAgIGdpdGdyYXBoOiBhbnk7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJyYW5jaFNlcnZpY2UuY3VycmVudEJyYW5jaC5zdWJzY3JpYmUoYiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJyYW5jaCA9IGI7XHJcblxyXG4gICAgICAgICAgICBpZiAoYiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEJyYW5jaENvbW1pdEluZGV4ID0gdGhpcy5jb21taXRzLm1hcChzID0+IHMuaWQpLmluZGV4T2YoYi50aXBTaGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QnJhbmNoQ29tbWl0SW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21taXQgPSB0aGlzLmNvbW1pdHNbY3VycmVudEJyYW5jaENvbW1pdEluZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2l0Z3JhcGggPSBuZXcgR2l0R3JhcGgoKTtcclxuICAgICAgICAvLyAgICAgdmFyIG1hc3RlciA9IHRoaXMuZ2l0Z3JhcGguYnJhbmNoKFwibWFzdGVyXCIpO1xyXG4gICAgICAgIHRoaXMuZ2V0R2l0TG9nKCk7XHJcblxyXG4gICAgICAgIC8vY2hhbmdlcyBjaGFuZ2VzIGNoYW5nZXNcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChjb21taXQ6IENvbW1pdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb21taXQgPSBjb21taXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2l0TG9nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5zaG93TG9hZGVyKCk7XHJcbiAgICAgICAgdGhpcy5naXRTZXJ2aWNlLmdldExvZygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0cyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5oaWRlTG9hZGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXdHcmFwaCgpOiB2b2lkIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBjb21taXQgb2YgdGhpcy5jb21taXRzKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ2l0Z3JhcGguY29tbWl0KHtcclxuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2U6IGNvbW1pdC5tZXNzYWdlLFxyXG4gICAgLy8gICAgICAgICAgICAgYXV0aG9yOiBjb21taXQuYXV0aG9yLm5hbWUgKyBcIiBcIiArIGNvbW1pdC5hdXRob3IuZW1haWxcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLy8gZGVjbGFyZSB2YXIgR2l0R3JhcGg6IGFueTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
