import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/RX";

export class PullResult {
    constructor(public sha: string, public status: string) {

    }
}

@Injectable()
export class RepositoryService {
    constructor(private http: Http) {

    }

    fetch(): Observable<boolean> {
        return this.http.post("api/repository/fetch", {})
            .map(r => r.json());
           
    }

    pull(): Observable<PullResult> {
        return this.http.post("api/repository/pull", {})
            .map(r => r.json());
    }
}