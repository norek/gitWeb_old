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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNJLFlBQW9CLFVBQXlCO29CQUF6QixlQUFVLEdBQVYsVUFBVSxDQUFlO2dCQUU3QyxDQUFDO2dCQUVELFFBQVE7b0JBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQU1ELFFBQVEsQ0FBQyxNQUFjO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO3lCQUNuQixTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7WUFDTCxDQUFDO1lBNUJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFdBQVcsRUFBRSx1QkFBdUI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUNqRCxDQUFDOzsrQkFBQTtZQUdGLDZDQXFCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21taXQvY29tbWl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbW1pdCB9IGZyb20gXCIuLi9HaXQvTW9kZWwvQ29tbWl0XCI7XHJcbmltcG9ydCB7Q29tbWl0U2VydmljZX0gZnJvbSBcIi4vY29tbWl0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuLi9icmFuY2gvQnJhbmNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNvbW1pdHNcIixcclxuICAgIHRlbXBsYXRlVXJsOiAnY29tbWl0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydhcHAvU3R5bGVzL2NvbW1pdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWl0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0U2VydmljZTogQ29tbWl0U2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEdpdExvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbW1pdHM6IENvbW1pdFtdO1xyXG4gICAgYnJhbmNoTGlzdDogQnJhbmNoW107XHJcbiAgICBzZWxlY3RlZENvbW1pdDogQ29tbWl0O1xyXG5cclxuICAgIG9uU2VsZWN0KGNvbW1pdDogQ29tbWl0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbW1pdCA9IGNvbW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHaXRMb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5naXRTZXJ2aWNlLmdldExvZygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocyA9PiB0aGlzLmNvbW1pdHMgPSBzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
