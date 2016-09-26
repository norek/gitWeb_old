System.register(['@angular/core', "../../Git/Model/Commit"], function(exports_1, context_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvZGV0YWlsL2NvbW1pdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7WUFLQSxDQUFDO1lBSEc7Z0JBQUMsWUFBSyxFQUFFOztpRUFBQTtZQVBaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO29CQUNyRCxXQUFXLEVBQUUsOEJBQThCO2lCQUM5QyxDQUFDOztxQ0FBQTtZQUNGLHlEQUtDLENBQUEiLCJmaWxlIjoiYXBwL2NvbW1pdC9kZXRhaWwvY29tbWl0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1pdH0gZnJvbSBcIi4uLy4uL0dpdC9Nb2RlbC9Db21taXRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb21taXQtZGV0YWlsJyxcclxuICAgIHN0eWxlVXJsczogWydhcHAvU3R5bGVzL2NvbW1pdC1kZXRhaWwuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjb21taXQtZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbWl0RGV0YWlsQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgY29tbWl0OiBDb21taXQ7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
