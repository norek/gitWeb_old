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
                __metadata('design:type', Commit_1.Commit)
            ], CommitDetailComponent.prototype, "commit", void 0);
            CommitDetailComponent = __decorate([
                core_1.Component({
                    selector: 'commit-detail',
                    styleUrls: ['app/Styles/commit-detail.component.css'],
                    templateUrl: 'commit-detail.component.html',
                    providers: [commit_changes_service_1.CommitChangesService]
                }), 
                __metadata('design:paramtypes', [commit_changes_service_1.CommitChangesService])
            ], CommitDetailComponent);
            exports_1("CommitDetailComponent", CommitDetailComponent);
        }
    }
});
//# sourceMappingURL=commit-detail.component.js.map