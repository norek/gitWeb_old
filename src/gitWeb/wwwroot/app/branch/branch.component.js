System.register(["@angular/core", "./branch.service"], function(exports_1, context_1) {
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
    var core_1, branch_service_1;
    var BranchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (branch_service_1_1) {
                branch_service_1 = branch_service_1_1;
            }],
        execute: function() {
            let BranchComponent = class BranchComponent {
                constructor(branchService) {
                    this.branchService = branchService;
                }
                ngOnInit() {
                    this.getBranchList();
                }
                getBranchList() {
                    this.branchService.getBranchList().subscribe(d => this.branchList = d);
                }
                isCurrentRepositoryHead(branch) {
                    return branch.isCurrentRepositoryHead;
                }
                onSelect(branch) {
                    this.selectedBranch = branch;
                    this.branchService.setCurrentBranch(branch);
                }
            };
            BranchComponent = __decorate([
                core_1.Component({
                    selector: "branches",
                    styleUrls: ["app/Styles/branch.component.css"],
                    templateUrl: "branch.component.html"
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof branch_service_1.BranchService !== 'undefined' && branch_service_1.BranchService) === 'function' && _a) || Object])
            ], BranchComponent);
            exports_1("BranchComponent", BranchComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLFlBQW9CLGFBQTRCO29CQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtnQkFFaEQsQ0FBQztnQkFLRCxRQUFRO29CQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxhQUFhO29CQUNULElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO2dCQUVELHVCQUF1QixDQUFDLE1BQWM7b0JBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsUUFBUSxDQUFDLE1BQWM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO29CQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO1lBRUwsQ0FBQztZQWhDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDOUMsV0FBVyxFQUFFLHVCQUF1QjtpQkFDdkMsQ0FBQzs7K0JBQUE7WUFFRiw2Q0EwQkMsQ0FBQSIsImZpbGUiOiJhcHAvYnJhbmNoL2JyYW5jaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJhbmNofSBmcm9tIFwiLi9icmFuY2hcIjtcclxuaW1wb3J0IHtCcmFuY2hTZXJ2aWNlfSBmcm9tIFwiLi9icmFuY2guc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJicmFuY2hlc1wiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJhcHAvU3R5bGVzL2JyYW5jaC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYnJhbmNoLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmFuY2hDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJhbmNoU2VydmljZTogQnJhbmNoU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBicmFuY2hMaXN0OiBCcmFuY2hbXTtcclxuICAgIHNlbGVjdGVkQnJhbmNoOiBCcmFuY2g7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCcmFuY2hMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJhbmNoTGlzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJyYW5jaFNlcnZpY2UuZ2V0QnJhbmNoTGlzdCgpLnN1YnNjcmliZShkID0+IHRoaXMuYnJhbmNoTGlzdCA9IGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ3VycmVudFJlcG9zaXRvcnlIZWFkKGJyYW5jaDogQnJhbmNoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGJyYW5jaC5pc0N1cnJlbnRSZXBvc2l0b3J5SGVhZDtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChicmFuY2g6IEJyYW5jaCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCcmFuY2ggPSBicmFuY2g7XHJcbiAgICAgICAgdGhpcy5icmFuY2hTZXJ2aWNlLnNldEN1cnJlbnRCcmFuY2goYnJhbmNoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
