import {Component, ViewChild, OnInit} from "@angular/core";
import {Commit } from "../Git/Model/Commit";
import {CommitService} from "./commit.service";
import {Branch} from "../branch/Branch";
import {BranchService} from "../branch/branch.service";

@Component({
    selector: "commits",
    templateUrl: 'commit.component.html',
    // template: `<canvas id="gitGraph"></canvas>`,
    styleUrls: ['app/Styles/commit.component.css']
})


export class CommitComponent {
    constructor(private gitService: CommitService, private branchService: BranchService) {

    }

    loggedIn: boolean = false;
    subscription: any;
    currentBranch: Branch;
    commits: Commit[];
    selectedCommit: Commit;
    gitgraph: any;

    ngOnInit() {
        this.subscription = this.branchService.currentBranch.subscribe(b => {
            this.currentBranch = b;

            if(b !== undefined){
                let currentBranchCommitIndex = this.commits.map(s => s.id).indexOf(b.tipSha);

                if(currentBranchCommitIndex > -1){
                    this.selectedCommit = this.commits[currentBranchCommitIndex];
                }
            }

        });
    }

    ngAfterViewInit() { 
    //     this.gitgraph = new GitGraph();
    //     var master = this.gitgraph.branch("master");
        this.getGitLog();
    }

    onSelect(commit: Commit): void {
        this.selectedCommit = commit;
    }

    getGitLog(): void {
        this.gitService.getLog()
            .subscribe(s => {
                this.commits = s;
                // this.drawGraph();
            });
    }

    // drawGraph(): void {
    //     for (let commit of this.commits) {
    //         this.gitgraph.commit({
    //             message: commit.message,
    //             author: commit.author.name + " " + commit.author.email
    //         });
    //     }
    // }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}

// declare var GitGraph: any;