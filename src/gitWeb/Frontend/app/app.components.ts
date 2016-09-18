import { Component } from "@angular/core";
import {GitService} from "./Git/git.service";
import {Commit} from "./Git/Model/Commit";
import {Branch} from "./Git/Model/Branch";

@Component({
    selector: "app",
    providers: [GitService],
    template: `
        <h1>  GIT LOG </h1>
        <ul>
            <li *ngFor="let commit of commits">
                <div class="view">
                    <label>{{commit.message}} {{commit.id}}</label>
                </div></li>
        </ul>
                {{gitLog}}
            <h1>  GIT BRANCH LIST </h1>
        <ul class="branchList">
            <li *ngFor="let branch of branchList">
              <div class="view">
                <label>{{branch.name}} {{branch.isRemote}}</label>
              </div>
            </li>
          </ul>
    `
})


export class AppComponent {
    constructor(private gitService: GitService) {
        
    }

    ngOnInit() {
        this.getGitLog();
        this.getBranches();
    }

    commits: Commit[];
    branchList: Branch[];

    getGitLog(): void {
        this.gitService.getLog()
            .subscribe(s => this.commits = s);
    }

    getBranches() { this.gitService.getBranches().subscribe(s => this.branchList = s); }

}