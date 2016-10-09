import { Component, AfterViewInit  } from "@angular/core";
import {RepositoryService} from './repository/repository.service';
import {LoaderService,ILoader} from './shared/loader.service';

@Component({
    selector: 'app',
    styleUrls: ['app/Styles/app.component.css'],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements AfterViewInit {
    loader : ILoader;
    constructor(public repositoryService: RepositoryService,private loaderService:LoaderService) {
        this.loader = loaderService.loader;
    }

    ngAfterViewInit() {
        setTimeout(function () {
            componentHandler.upgradeAllRegistered();
        });
    }

    fetch(): void {
        
        this.repositoryService.fetch().subscribe(() => {
            console.log('fetch end');
        })
    }

}