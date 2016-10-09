import { Component, AfterViewInit, OnInit  } from "@angular/core";
import {RepositoryService} from './repository/repository.service';
import {LoaderService, ILoader} from './shared/loader.service';
import {ChangeService, FileChange, FileChangeDetail} from './changes/changes.service';

declare var componentHandler: any;

@Component({
    selector: 'app',
    styleUrls: ['app/Styles/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements AfterViewInit, OnInit {

    loader: ILoader;
    inProgress: boolean;
    fileChanges: FileChange[];
    selectedFileChangeDetail: FileChangeDetail;

    constructor(public repositoryService: RepositoryService,
        private loaderService: LoaderService,
        private changeService: ChangeService) {
        this.loader = loaderService.loader;
        this.inProgress = false;
    }

    ngOnInit() {
        this.changeService.getChanges().subscribe(result => this.fileChanges = result);
    }

    ngAfterViewInit() {
        setTimeout(function () {
            componentHandler.upgradeAllRegistered();
        });


    }

    onSelect(fileChange: FileChange): void {
        this.changeService.getFileChange(fileChange.filePath)
            .subscribe(res => {
                this.selectedFileChangeDetail = res;
                // console.log(JSON.stringify(res));
            });
    }

    fetch(): void {
        this.inProgress = true;
        this.repositoryService.fetch().subscribe((s) => {
            console.log('fetch end');
            this.inProgress = false;
        })
    }

    pull(): void {
        this.inProgress = true;
        this.repositoryService.pull().subscribe((s) => {
            console.log(JSON.stringify(s));
            this.inProgress = false;
        });
    }

}

