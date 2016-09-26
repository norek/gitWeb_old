import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable, } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Commit} from "../Git/Model/Commit";

@Injectable()
export class CommitService {
    constructor(private http: Http) {

    }

    getLog(): Observable<Commit[]> {
        return this.http
            .get("api/commit")
            .map(b => b.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }
}