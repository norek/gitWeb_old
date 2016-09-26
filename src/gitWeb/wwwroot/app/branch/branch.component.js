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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLFlBQW9CLGFBQTRCO29CQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtnQkFFaEQsQ0FBQztnQkFLRCxRQUFRO29CQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxhQUFhO29CQUNULElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO2dCQUVELFFBQVEsQ0FBQyxNQUFhO29CQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztZQUVMLENBQUM7WUEzQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsU0FBUyxFQUFDLENBQUMsaUNBQWlDLENBQUM7b0JBQzdDLFdBQVcsRUFBRSx1QkFBdUI7aUJBQ3ZDLENBQUM7OytCQUFBO1lBRUYsNkNBcUJDLENBQUEiLCJmaWxlIjoiYXBwL2JyYW5jaC9icmFuY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJhbmNofSBmcm9tIFwiLi9icmFuY2hcIjtcclxuaW1wb3J0IHtCcmFuY2hTZXJ2aWNlfSBmcm9tIFwiLi9icmFuY2guc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJicmFuY2hlc1wiLFxyXG4gICAgc3R5bGVVcmxzOltcImFwcC9TdHlsZXMvYnJhbmNoLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJicmFuY2guY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyYW5jaENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBicmFuY2hTZXJ2aWNlOiBCcmFuY2hTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJyYW5jaExpc3Q6QnJhbmNoW107XHJcbiAgICBzZWxlY3RlZEJyYW5jaDpCcmFuY2g7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCcmFuY2hMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJhbmNoTGlzdCgpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5icmFuY2hTZXJ2aWNlLmdldEJyYW5jaExpc3QoKS5zdWJzY3JpYmUoZCA9PiB0aGlzLmJyYW5jaExpc3QgPSBkKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChicmFuY2g6QnJhbmNoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCcmFuY2ggPSBicmFuY2g7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
