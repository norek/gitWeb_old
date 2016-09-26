import {Component, OnInit } from '@angular/core';
import {CommitSearchService} from "./commit-search.service";
import {Commit} from "../../Git/Model/Commit";
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
    selector: "commit-search",
    styleUrls: ['app/Styles/commit-search.component.css'],
    templateUrl: 'commit-search.component.html',
    providers: [CommitSearchComponent]
})

export class CommitSearchComponent implements OnInit{

    constructor(private commitSearchService: CommitSearchService) {
        
    }

    commits: Observable<Commit[]>;
    private searchTerms = new Subject<string>();

    search(term: string): void {
        this.searchTerms.next(term);
    }

    goToDetail(commit: Commit): void {
        
    }

    ngOnInit(): void {
        this.commits = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.commitSearchService.search(term) : Observable.of<Commit[]>([]))
        .catch(error => {
                console.log(error);
                return Observable.of<Commit[]>([]);
            }); 
        }
}