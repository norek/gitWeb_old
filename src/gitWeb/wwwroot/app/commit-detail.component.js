System.register(['@angular/core', "./Git/Model/Commit"], function(exports_1, context_1) {
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
    var core_1, Commit_1;
    var CommitDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Commit_1_1) {
                Commit_1 = Commit_1_1;
            }],
        execute: function() {
            let CommitDetailComponent = class CommitDetailComponent {
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', (typeof (_a = typeof Commit_1.Commit !== 'undefined' && Commit_1.Commit) === 'function' && _a) || Object)
            ], CommitDetailComponent.prototype, "commit", void 0);
            CommitDetailComponent = __decorate([
                core_1.Component({
                    selector: 'commit-detail',
                    styleUrls: ['app/Styles/commit-detail.component.css'],
                    templateUrl: 'commit-detail.component.html'
                }), 
                __metadata('design:paramtypes', [])
            ], CommitDetailComponent);
            exports_1("CommitDetailComponent", CommitDetailComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO1lBS0EsQ0FBQztZQUhHO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFQWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztvQkFDckQsV0FBVyxFQUFFLDhCQUE4QjtpQkFDOUMsQ0FBQzs7cUNBQUE7WUFDRix5REFLQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21taXQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbWl0fSBmcm9tIFwiLi9HaXQvTW9kZWwvQ29tbWl0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29tbWl0LWRldGFpbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9jb21taXQtZGV0YWlsLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnY29tbWl0LWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1pdERldGFpbENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNvbW1pdDogQ29tbWl0O1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
