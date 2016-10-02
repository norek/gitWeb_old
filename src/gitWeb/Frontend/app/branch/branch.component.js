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
                __metadata('design:paramtypes', [branch_service_1.BranchService])
            ], BranchComponent);
            exports_1("BranchComponent", BranchComponent);
        }
    }
});
//# sourceMappingURL=branch.component.js.map