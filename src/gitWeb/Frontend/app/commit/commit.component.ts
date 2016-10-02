import {Component,ViewChild} from "@angular/core";
import {Commit } from "../Git/Model/Commit";
import {CommitService} from "./commit.service";
import {Branch} from "../branch/Branch";
import {BranchService} from "../branch/Branch.Service";

@Component({
    selector: "commits",
    // templateUrl: 'commit.component.html',
    template: `<canvas id="gitGraph"></canvas>`,
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
    gitgraph:any;

    ngOnInit() {
        this.getGitLog();
        this.subscription = this.branchService.currentBranch.subscribe(b => { this.currentBranch = b });

    }

    ngAfterViewInit() { // wait for the view to init before using the element
        this.gitgraph = new GitGraph();
        var master = this.gitgraph.branch("master");
        this.gitgraph.commit('s');  

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

declare var GitGraph:any;