import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/RX";

@Injectable()
export class CommitChangesService {
    constructor(private http: Http) {
        
    }

    getCommitChanges(commitId: string): Observable<CommitChange[]> {
        return this.http.get('/api/commit/' + commitId + '/changes')
            .map(d => d.json());

    }
}

export class CommitChange {

    constructor(public status: string, public path: string) {
        
    }

}