import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable, } from "rxjs/Rx";
import {Branch} from "./Model/Branch";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GitService {
    constructor(private http: Http) {

    }

    getLog(): Observable<string> {
        return this.http
            .get("api/git/log")
            .map(d => <string>d.text());
    }

    getBranches() : Observable<Branch[]> {
        return this.http
            .get("/api/git/branch")
            .map(b => b.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }
}