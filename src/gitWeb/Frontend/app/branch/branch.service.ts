import {Http} from "@angular/http";
import {Branch} from "./branch";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

import "rxjs/add/operator/share";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BranchService {

    private observer: Observer<Branch>;
    currentBranch: Observable<Branch>;

    constructor(private http: Http) {
        this.currentBranch = new Observable<Branch>(observer => this.observer = observer).share();
    }

    setCurrentBranch(branch: Branch) {

        if (this.observer !== undefined) {
            this.observer.next(branch);
            console.log('in service ' + branch.tipSha);
        }
    }

    getBranchList(): Observable<Branch[]> {
        return this.http.get("/api/branch/")
            .map(s => s.json())
            .catch(err => Observable.throw(err.json().error));
    }
}
