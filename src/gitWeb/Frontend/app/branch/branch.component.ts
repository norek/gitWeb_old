import {Component, EventEmitter, Output} from "@angular/core";
import {Branch} from "./branch";
import {BranchService} from "./branch.service";

@Component({
    selector: "branches",
    styleUrls: ["app/Styles/branch.component.css"],
    templateUrl: "branch.component.html"
})

export class BranchComponent {

    constructor(private branchService: BranchService) {

    }

    branchList: Branch[];
    selectedBranch: Branch;

    ngOnInit() {
        this.getBranchList();
    }

    getBranchList(): void {
        this.branchService.getBranchList().subscribe(d => this.branchList = d);
    }

    isCurrentRepositoryHead(branch: Branch): boolean {
        return branch.isCurrentRepositoryHead;
    }

    onSelect(branch: Branch): void {
        this.selectedBranch = branch;
        this.branchService.setCurrentBranch(branch);
    }

}