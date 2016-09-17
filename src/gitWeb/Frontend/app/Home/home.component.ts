import { Component } from "@angular/core";
import {HelloService} from "./hello.service";
import {GitService} from "../Git/git.service";
import {Branch} from "../Git/Model/Branch";

@Component({
    selector: "app-home",
    providers: [HelloService, GitService],
    template: `
        <h1>Greeting test</h1>
        {{greeting}}
            <h1>  GIT LOG </h1>
        {{gitLog}}
            <h1>  GIT BRANCH LIST </h1>
        <ul class="todo-list">
            <li *ngFor="let branch of branchList">
              <div class="view">
                <label>{{branch.name}} {{branch.isRemote}}</label>
              </div>
            </li>
          </ul>
    `
})
export class HomeComponent {
    constructor(private helloService: HelloService, private gitService: GitService) {
    }

    ngOnInit() {
        this.greet("Michal");
        this.getGitLog();
        this.getBranches();
    }

    greeting: string;
    gitLog: string;
    branchList: Branch[];

    greet(name: string): void {
        this.helloService
            .greet(name)
            .subscribe(data => this.greeting = data);
    }

    getGitLog(): void {
        this.gitService.getLog()
            .subscribe(s => this.gitLog = s);
    }

    getBranches() { this.gitService.getBranches().subscribe(s => this.branchList = s); }

}