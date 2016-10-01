import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/RX";
import {Branch} from "./branch";
import {Observer} from "rxjs/Observer";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BranchService{

    currentBranch:Observable<Branch>;
    private observer:Observer<Branch>;

    constructor(private http:Http){
        this.currentBranch = new Observable<Branch>(obs => this.observer = obs).share();
    }

    setCurrentBranch(branch:Branch){
        if(this.observer !== undefined) this.observer.next(branch);
    }

    getBranchList():Observable<Branch[]>{
        return this.http.get("/api/branch/")
                .map(s => s.json())
                .catch(err => Observable.throw(err.json().error));
    }
}
