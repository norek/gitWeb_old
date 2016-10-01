import {Component} from "@angular/core";
import {Commit } from "../Git/Model/Commit";
import {CommitService} from "./commit.service";
import {Branch} from "../branch/Branch";
import {BranchService} from "../branch/Branch.Service";

@Component({
    selector: "commits",
    templateUrl: 'commit.component.html',
    styleUrls: ['app/Styles/commit.component.css'],
    providers: [BranchService]
})


export class CommitComponent {
    constructor(private gitService: CommitService, private branchService: BranchService) {

    }

    subscription: any;
    currentBranch: Branch;
    commits: Commit[];
    selectedCommit: Commit;

    ngOnInit() {
        this.getGitLog();
        this.subscription = this.branchService.currentBranch.subscribe(b => { this.currentBranch = b });
    }

    onSelect(commit: Commit): void {
        this.selectedCommit = commit;
    }

    getGitLog(): void {
        this.gitService.getLog()
            .subscribe(s => this.commits = s);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}