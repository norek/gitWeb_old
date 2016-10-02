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
                    this.gitgraph = new GitGraph();
                }
                ngOnInit() {
                    this.getGitLog();
                    this.subscription = this.branchService.currentBranch.subscribe(b => { this.currentBranch = b; });
                    this.gitgraph.commit().commit().commit();
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
                    templateUrl: 'commit.component.html',
                    styleUrls: ['app/Styles/commit.component.css'],
                    providers: [Branch_Service_1.BranchService]
                }), 
                __metadata('design:paramtypes', [commit_service_1.CommitService, Branch_Service_1.BranchService])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
});
//# sourceMappingURL=commit.component.js.map