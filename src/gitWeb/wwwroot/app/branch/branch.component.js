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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLFlBQW9CLGFBQTRCO29CQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtnQkFFaEQsQ0FBQztnQkFLRCxRQUFRO29CQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxhQUFhO29CQUNULElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO2dCQUVELFFBQVEsQ0FBQyxNQUFhO29CQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztZQUVMLENBQUM7WUE1QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsU0FBUyxFQUFDLENBQUMsaUNBQWlDLENBQUM7b0JBQzdDLFdBQVcsRUFBRSx1QkFBdUI7aUJBQ3ZDLENBQUM7OytCQUFBO1lBRUYsNkNBc0JDLENBQUEiLCJmaWxlIjoiYXBwL2JyYW5jaC9icmFuY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyLE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuL2JyYW5jaFwiO1xyXG5pbXBvcnQge0JyYW5jaFNlcnZpY2V9IGZyb20gXCIuL2JyYW5jaC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImJyYW5jaGVzXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiYXBwL1N0eWxlcy9icmFuY2guY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcImJyYW5jaC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnJhbmNoQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyYW5jaFNlcnZpY2U6IEJyYW5jaFNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnJhbmNoTGlzdDpCcmFuY2hbXTtcclxuICAgIHNlbGVjdGVkQnJhbmNoOkJyYW5jaDtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEJyYW5jaExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hMaXN0KCk6dm9pZHtcclxuICAgICAgICB0aGlzLmJyYW5jaFNlcnZpY2UuZ2V0QnJhbmNoTGlzdCgpLnN1YnNjcmliZShkID0+IHRoaXMuYnJhbmNoTGlzdCA9IGQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGJyYW5jaDpCcmFuY2gpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJyYW5jaCA9IGJyYW5jaDtcclxuICAgICAgICB0aGlzLmJyYW5jaFNlcnZpY2Uuc2V0Q3VycmVudEJyYW5jaChicmFuY2gpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
