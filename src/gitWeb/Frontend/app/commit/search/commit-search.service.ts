import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Commit} from "../../Git/Model/Commit";

@Injectable()
export class CommitSearchService {

    constructor(private http: Http) {
        
    }

    search(term: string): Observable<Commit[]> {
        return this.http.get('/api/commit/' + term)
            .map(d => d.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }
}