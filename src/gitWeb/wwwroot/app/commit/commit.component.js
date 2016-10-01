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
                __metadata('design:paramtypes', [(typeof (_a = typeof commit_service_1.CommitService !== 'undefined' && commit_service_1.CommitService) === 'function' && _a) || Object, (typeof (_b = typeof Branch_Service_1.BranchService !== 'undefined' && Branch_Service_1.BranchService) === 'function' && _b) || Object])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
    var _a, _b;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUNJLFlBQW9CLFVBQXlCLEVBQVUsYUFBNEI7b0JBQS9ELGVBQVUsR0FBVixVQUFVLENBQWU7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7Z0JBRW5GLENBQUM7Z0JBT0QsUUFBUTtvQkFDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxDQUFDO2dCQUVELFFBQVEsQ0FBQyxNQUFjO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO3lCQUNuQixTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztZQW5DRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztpQkFDN0IsQ0FBQzs7K0JBQUE7WUFHRiw2Q0EyQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tbWl0L2NvbW1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21taXQgfSBmcm9tIFwiLi4vR2l0L01vZGVsL0NvbW1pdFwiO1xyXG5pbXBvcnQge0NvbW1pdFNlcnZpY2V9IGZyb20gXCIuL2NvbW1pdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QnJhbmNofSBmcm9tIFwiLi4vYnJhbmNoL0JyYW5jaFwiO1xyXG5pbXBvcnQge0JyYW5jaFNlcnZpY2V9IGZyb20gXCIuLi9icmFuY2gvQnJhbmNoLlNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29tbWl0c1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjb21taXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC9TdHlsZXMvY29tbWl0LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0JyYW5jaFNlcnZpY2VdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1pdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdFNlcnZpY2U6IENvbW1pdFNlcnZpY2UsIHByaXZhdGUgYnJhbmNoU2VydmljZTogQnJhbmNoU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIGN1cnJlbnRCcmFuY2g6IEJyYW5jaDtcclxuICAgIGNvbW1pdHM6IENvbW1pdFtdO1xyXG4gICAgc2VsZWN0ZWRDb21taXQ6IENvbW1pdDtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEdpdExvZygpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5icmFuY2hTZXJ2aWNlLmN1cnJlbnRCcmFuY2guc3Vic2NyaWJlKGIgPT4geyB0aGlzLmN1cnJlbnRCcmFuY2ggPSBiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGNvbW1pdDogQ29tbWl0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbW1pdCA9IGNvbW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHaXRMb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5naXRTZXJ2aWNlLmdldExvZygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocyA9PiB0aGlzLmNvbW1pdHMgPSBzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
