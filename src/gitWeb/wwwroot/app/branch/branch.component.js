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
                    this.onBranchSelected = new core_1.EventEmitter();
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
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], BranchComponent.prototype, "onBranchSelected", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLFlBQW9CLGFBQTRCO29CQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFPdEMscUJBQWdCLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBTHhELENBQUM7Z0JBT0QsUUFBUTtvQkFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsYUFBYTtvQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztnQkFFRCxRQUFRLENBQUMsTUFBYTtvQkFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7WUFFTCxDQUFDO1lBZkc7Z0JBQUMsYUFBTSxFQUFFOztxRUFBQTtZQWZiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFNBQVMsRUFBQyxDQUFDLGlDQUFpQyxDQUFDO29CQUM3QyxXQUFXLEVBQUUsdUJBQXVCO2lCQUN2QyxDQUFDOzsrQkFBQTtZQUVGLDZDQXdCQyxDQUFBIiwiZmlsZSI6ImFwcC9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJhbmNofSBmcm9tIFwiLi9icmFuY2hcIjtcclxuaW1wb3J0IHtCcmFuY2hTZXJ2aWNlfSBmcm9tIFwiLi9icmFuY2guc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJicmFuY2hlc1wiLFxyXG4gICAgc3R5bGVVcmxzOltcImFwcC9TdHlsZXMvYnJhbmNoLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJicmFuY2guY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyYW5jaENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBicmFuY2hTZXJ2aWNlOiBCcmFuY2hTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJyYW5jaExpc3Q6QnJhbmNoW107XHJcbiAgICBzZWxlY3RlZEJyYW5jaDpCcmFuY2g7XHJcblxyXG4gICAgQE91dHB1dCgpIG9uQnJhbmNoU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEJyYW5jaD4oKTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEJyYW5jaExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hMaXN0KCk6dm9pZHtcclxuICAgICAgICB0aGlzLmJyYW5jaFNlcnZpY2UuZ2V0QnJhbmNoTGlzdCgpLnN1YnNjcmliZShkID0+IHRoaXMuYnJhbmNoTGlzdCA9IGQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGJyYW5jaDpCcmFuY2gpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJyYW5jaCA9IGJyYW5jaDtcclxuICAgICAgICB0aGlzLmJyYW5jaFNlcnZpY2Uuc2V0Q3VycmVudEJyYW5jaChicmFuY2gpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
