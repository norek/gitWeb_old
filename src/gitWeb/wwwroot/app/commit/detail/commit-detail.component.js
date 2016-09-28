System.register(['@angular/core', "../../Git/Model/Commit", "../changes/commit-changes.service"], function(exports_1, context_1) {
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
    var core_1, Commit_1, commit_changes_service_1;
    var CommitDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Commit_1_1) {
                Commit_1 = Commit_1_1;
            },
            function (commit_changes_service_1_1) {
                commit_changes_service_1 = commit_changes_service_1_1;
            }],
        execute: function() {
            let CommitDetailComponent = class CommitDetailComponent {
                constructor(commitChangeService) {
                    this.commitChangeService = commitChangeService;
                }
                ngOnChanges(changes) {
                    console.log('ngOnChanges: ' + JSON.stringify(changes['commit'].currentValue));
                    let change = changes['commit'];
                    if (change.currentValue !== undefined) {
                        console.log("Call for details: " + change.currentValue.id);
                        this.commitChangeService
                            .getCommitChanges(change.currentValue.id)
                            .subscribe(d => this.changes = d);
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', (typeof (_a = typeof Commit_1.Commit !== 'undefined' && Commit_1.Commit) === 'function' && _a) || Object)
            ], CommitDetailComponent.prototype, "commit", void 0);
            CommitDetailComponent = __decorate([
                core_1.Component({
                    selector: 'commit-detail',
                    styleUrls: ['app/Styles/commit-detail.component.css'],
                    templateUrl: 'commit-detail.component.html',
                    providers: [commit_changes_service_1.CommitChangesService]
                }), 
                __metadata('design:paramtypes', [(typeof (_b = typeof commit_changes_service_1.CommitChangesService !== 'undefined' && commit_changes_service_1.CommitChangesService) === 'function' && _b) || Object])
            ], CommitDetailComponent);
            exports_1("CommitDetailComponent", CommitDetailComponent);
        }
    }
    var _a, _b;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvZGV0YWlsL2NvbW1pdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBRUksWUFBb0IsbUJBQXlDO29CQUF6Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO2dCQUU3RCxDQUFDO2dCQU1ELFdBQVcsQ0FBQyxPQUF5QztvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFFOUUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLG1CQUFtQjs2QkFDbkIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7NkJBQ3hDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFFMUMsQ0FBQztnQkFDTCxDQUFDO1lBRUwsQ0FBQztZQWxCRztnQkFBQyxZQUFLLEVBQUU7O2lFQUFBO1lBYlo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7b0JBQ3JELFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRyxDQUFDLDZDQUFvQixDQUFDO2lCQUNyQyxDQUFDOztxQ0FBQTtZQUVGLHlEQXdCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21taXQvZGV0YWlsL2NvbW1pdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbWl0fSBmcm9tIFwiLi4vLi4vR2l0L01vZGVsL0NvbW1pdFwiO1xyXG5pbXBvcnQge0NvbW1pdENoYW5nZXNTZXJ2aWNlLCBDb21taXRDaGFuZ2UgfSBmcm9tIFwiLi4vY2hhbmdlcy9jb21taXQtY2hhbmdlcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29tbWl0LWRldGFpbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9jb21taXQtZGV0YWlsLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnY29tbWl0LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnMgOiBbQ29tbWl0Q2hhbmdlc1NlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWl0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWl0Q2hhbmdlU2VydmljZTogQ29tbWl0Q2hhbmdlc1NlcnZpY2UpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgY29tbWl0OiBDb21taXQ7XHJcbiAgICBjaGFuZ2VzOiBDb21taXRDaGFuZ2VbXTtcclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BOYW1lOnN0cmluZ106U2ltcGxlQ2hhbmdlfSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ09uQ2hhbmdlczogJyArIEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ2NvbW1pdCddLmN1cnJlbnRWYWx1ZSkpO1xyXG5cclxuICAgICAgICBsZXQgY2hhbmdlID0gY2hhbmdlc1snY29tbWl0J107XHJcbiAgICAgICAgaWYgKGNoYW5nZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYWxsIGZvciBkZXRhaWxzOiBcIiArIGNoYW5nZS5jdXJyZW50VmFsdWUuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1pdENoYW5nZVNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXRDb21taXRDaGFuZ2VzKGNoYW5nZS5jdXJyZW50VmFsdWUuaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGQgPT4gdGhpcy5jaGFuZ2VzID0gZCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
