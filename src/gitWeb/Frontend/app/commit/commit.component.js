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
                            if (currentBranchCommitIndex > 0) {
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
                __metadata('design:paramtypes', [commit_service_1.CommitService, branch_service_1.BranchService])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
});
// declare var GitGraph: any; 
//# sourceMappingURL=commit.component.js.map