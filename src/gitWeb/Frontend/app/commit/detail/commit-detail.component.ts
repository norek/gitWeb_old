import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {Commit} from "../../Git/Model/Commit";
import {CommitChangesService, CommitChange } from "../changes/commit-changes.service";

@Component({
    selector: 'commit-detail',
    styleUrls: ['app/Styles/commit-detail.component.css'],
    templateUrl: 'commit-detail.component.html',
    providers : [CommitChangesService]
})

export class CommitDetailComponent implements OnChanges{

    constructor(private commitChangeService: CommitChangesService) {
        
    }

    @Input()
    commit: Commit;
    changes: CommitChange[];

    ngOnChanges(changes: {[propName:string]:SimpleChange}): void {
        console.log('ngOnChanges: ' + JSON.stringify(changes['commit'].currentValue));

        let change = changes['commit'];
        if (change.currentValue !== undefined) {

            console.log("Call for details: " + change.currentValue.id);
            this.commitChangeService
                .getCommitChanges(change.currentValue.id)
                .subscribe(d => this.changes = d);

        }
    }

}