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
    selectedChange:FileChange;
    showChanges: boolean;

    constructor(public repositoryService: RepositoryService,
        private loaderService: LoaderService,
        private changeService: ChangeService) {
        this.loader = loaderService.loader;
        this.inProgress = false;
        this.showChanges = false;
    }

    ngOnInit() {
        this.changeService.getChanges().subscribe(result => this.fileChanges = result);
    }

    ngAfterViewInit() {
        setTimeout(function () {
            componentHandler.upgradeAllRegistered();
        });
    }

    closePreview():void{
        this.showChanges = false;
    }

    onSelect(fileChange: FileChange): void {
        this.selectedChange = fileChange;
        this.showChanges = true;
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

