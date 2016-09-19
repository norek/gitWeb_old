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
                    templateUrl: 'commit.component.html',
                    styleUrls: ['app/Styles/commit.component.css']
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof commit_service_1.CommitService !== 'undefined' && commit_service_1.CommitService) === 'function' && _a) || Object])
            ], CommitComponent);
            exports_1("CommitComponent", CommitComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBQ0ksWUFBb0IsVUFBeUI7b0JBQXpCLGVBQVUsR0FBVixVQUFVLENBQWU7Z0JBRTdDLENBQUM7Z0JBRUQsUUFBUTtvQkFDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBTUQsUUFBUSxDQUFDLE1BQWM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7eUJBQ25CLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztZQUNMLENBQUM7WUE1QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQ2pELENBQUM7OytCQUFBO1lBR0YsNkNBcUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbW1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21taXR9IGZyb20gXCIuL0dpdC9Nb2RlbC9Db21taXRcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuL0dpdC9Nb2RlbC9CcmFuY2hcIjtcclxuaW1wb3J0IHtDb21taXRTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21taXRzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbW1pdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9jb21taXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1pdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdFNlcnZpY2U6IENvbW1pdFNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRHaXRMb2coKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21taXRzOiBDb21taXRbXTtcclxuICAgIGJyYW5jaExpc3Q6IEJyYW5jaFtdO1xyXG4gICAgc2VsZWN0ZWRDb21taXQ6IENvbW1pdDtcclxuXHJcbiAgICBvblNlbGVjdChjb21taXQ6IENvbW1pdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb21taXQgPSBjb21taXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2l0TG9nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2l0U2VydmljZS5nZXRMb2coKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHMgPT4gdGhpcy5jb21taXRzID0gcyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
