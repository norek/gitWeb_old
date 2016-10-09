import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/RX";

@Injectable()
export class RepositoryService{
    constructor(private http:Http){

    }

    fetch():Observable<boolean>{
        return this.http.post("api/repository/",{})
        .map(r => r.json())
        .catch((error:any) => Observable.throw(error.json().error));
    }
}