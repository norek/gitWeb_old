import {Component} from "@angular/core";
import {Branch} from "./branch";
import {BranchService} from "./branch.service";

@Component({
    selector: "branches",
    templateUrl: "branch.component.html"
})

export class BranchComponent {

    constructor(private branchService: BranchService) {

    }

    branchList:Branch[];
    selectedBranch:Branch;

    ngOnInit() {
        this.getBranchList();
    }

    getBranchList():void{
        this.branchService.getBranchList().subscribe(d => this.branchList = d);
    }

    onSelect(branch:Branch):void{
        this.selectedBranch = branch;
    }

}