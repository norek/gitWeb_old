import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/RX";
import {GitTag} from "./gittag";

@Injectable()
export class TagService {

    constructor(private http: Http) {
        
    }

    getTagList(): Observable<GitTag[]> {
        return this.http.get('/api/tags')
            .map(d => d.json());
    }

}