import { Component } from "@angular/core";
import {GitService} from "./Git/git.service";
import {Commit} from "./Git/Model/Commit";
import {Branch} from "./Git/Model/Branch";

@Component({
    selector: "app",
   styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .commitList {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 55em;
      }
      .commitList li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 2.0em;
        border-radius: 4px;
      }
      .commitList li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .commitList li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .commitList .text {
        position: relative;
        top: -3px;
      }
      .commitList .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 2.0em;
        width: 30.0em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `]
,
    providers: [GitService],
    template: `
            <h1>  GIT LOG </h1>
            <ul class="commitList">
                <li *ngFor="let commit of commits" (click)="onSelect(commit)" 
                    [class.selected] = "commit === selectedCommit">
                    <span class="badge">{{commit.id}}</span> {{commit.message}}
                </li>
            </ul>

            <commit-detail [commit]="selectedCommit"></commit-detail>

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
    selectedCommit: Commit;

    onSelect(commit: Commit): void {
        this.selectedCommit = commit;
    }

    getGitLog(): void {
        this.gitService.getLog()
            .subscribe(s => this.commits = s);
    }

    getBranches() { this.gitService.getBranches().subscribe(s => this.branchList = s); }

}