import {Component, Input} from '@angular/core';
import {Commit} from "../../Git/Model/Commit";

@Component({
    selector: 'commit-detail',
    styleUrls: ['app/Styles/commit-detail.component.css'],
    templateUrl: 'commit-detail.component.html'
})
export class CommitDetailComponent {

    @Input()
    commit: Commit;

}