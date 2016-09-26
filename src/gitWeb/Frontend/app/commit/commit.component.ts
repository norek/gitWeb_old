import {Component} from "@angular/core";
import {Commit} from "../Git/Model/Commit";
import {CommitService} from "./commit.service";
import {Branch} from "../branch/Branch";

@Component({
    selector: "commits",
    templateUrl: 'commit.component.html',
    styleUrls: ['app/Styles/commit.component.css']
})


export class CommitComponent {
    constructor(private gitService: CommitService) {

    }

    ngOnInit() {
        this.getGitLog();
    }

    commits: Commit[];
    branchList: Branch[];
    selectedCommit: Commit;

    onSelect(commit: Commit): void {
        this.selectedCommit = commit;
    }

    getGitLog(): void {
        this.gitService.getLog()
            .subscribe(s => this.commits = s);
    }
}