import {Component, ViewChild, OnInit} from "@angular/core";
import {Commit } from "../Git/Model/Commit";
import {CommitService} from "./commit.service";
import {Branch} from "../branch/Branch";
import {BranchService} from "../branch/branch.service";
import {LoaderService} from "../shared/loader.service";

@Component({
    selector: "commits",
    templateUrl: 'commit.component.html',
    // template: `<canvas id="gitGraph"></canvas>`,
    styleUrls: ['app/Styles/commit.component.css']
})


export class CommitComponent {
    constructor(private gitService: CommitService, private branchService: BranchService, private loaderService: LoaderService) {

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

            if (b !== undefined) {
                let currentBranchCommitIndex = this.commits.map(s => s.id).indexOf(b.tipSha);

                if (currentBranchCommitIndex > -1) {
                    this.selectedCommit = this.commits[currentBranchCommitIndex];
                }
            }

        });
    }

    ngAfterViewInit() {
        //     this.gitgraph = new GitGraph();
        //     var master = this.gitgraph.branch("master");
        this.getGitLog();

        //changes changes changes
    }

    onSelect(commit: Commit): void {
        this.selectedCommit = commit;
    }

    getGitLog(): void {
        this.loaderService.showLoader();
        this.gitService.getLog()
            .subscribe(result => {
                this.commits = result;
                this.loaderService.hideLoader();
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