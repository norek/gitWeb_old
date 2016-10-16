import { Component, OnInit, Input, OnChanges, SimpleChange } from "@angular/core";
import { ChangeService, FileChange, FileChangeDetail } from './changes.service';


@Component({
    selector: 'change-detail',
    styleUrls: ['app/Styles/change-detail.component.css'],
    templateUrl: 'change-detail.component.html'
})
export class ChangeDetailComponent implements OnChanges {
    constructor(private changeService: ChangeService) {

    }

    @Input('change') fileChange: FileChange;
    selectedFileChangeDetail:FileChangeDetail;

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        let changedProp = changes['fileChange'];
        let currentFileChange = JSON.stringify(changedProp.currentValue);

        if (currentFileChange === undefined){
            return;
        }else if(this.fileChange.filePath !== undefined) {
            this.changeService.getFileChange(this.fileChange.filePath)
            .subscribe(res => {
                this.selectedFileChangeDetail = res;
            });
        }
    }
}