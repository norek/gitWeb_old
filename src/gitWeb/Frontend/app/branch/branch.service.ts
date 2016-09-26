import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/RX";
import {Branch} from "./branch";

// import '../rxjs-extensions';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BranchService{

    constructor(private http:Http){

    }

    getBranchList():Observable<Branch[]>{
        return this.http.get("/api/branch/")
                .map(s => s.json())
                .catch(err => Observable.throw(err.json().error));
    }
}
