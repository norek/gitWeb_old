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
                    this.onBranchSelected.emit(this.selectedBranch);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLFlBQW9CLGFBQTRCO29CQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFPdEMscUJBQWdCLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBTHhELENBQUM7Z0JBT0QsUUFBUTtvQkFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsYUFBYTtvQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztnQkFFRCxRQUFRLENBQUMsTUFBYTtvQkFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO1lBRUwsQ0FBQztZQWZHO2dCQUFDLGFBQU0sRUFBRTs7cUVBQUE7WUFmYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUMsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDN0MsV0FBVyxFQUFFLHVCQUF1QjtpQkFDdkMsQ0FBQzs7K0JBQUE7WUFFRiw2Q0F3QkMsQ0FBQSIsImZpbGUiOiJhcHAvYnJhbmNoL2JyYW5jaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXIsT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0JyYW5jaH0gZnJvbSBcIi4vYnJhbmNoXCI7XHJcbmltcG9ydCB7QnJhbmNoU2VydmljZX0gZnJvbSBcIi4vYnJhbmNoLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYnJhbmNoZXNcIixcclxuICAgIHN0eWxlVXJsczpbXCJhcHAvU3R5bGVzL2JyYW5jaC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYnJhbmNoLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmFuY2hDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJhbmNoU2VydmljZTogQnJhbmNoU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBicmFuY2hMaXN0OkJyYW5jaFtdO1xyXG4gICAgc2VsZWN0ZWRCcmFuY2g6QnJhbmNoO1xyXG5cclxuICAgIEBPdXRwdXQoKSBvbkJyYW5jaFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxCcmFuY2g+KCk7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCcmFuY2hMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJhbmNoTGlzdCgpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5icmFuY2hTZXJ2aWNlLmdldEJyYW5jaExpc3QoKS5zdWJzY3JpYmUoZCA9PiB0aGlzLmJyYW5jaExpc3QgPSBkKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChicmFuY2g6QnJhbmNoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCcmFuY2ggPSBicmFuY2g7XHJcbiAgICAgICAgdGhpcy5vbkJyYW5jaFNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZEJyYW5jaCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
