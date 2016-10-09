import {Injectable} from "@angular/core";
import {Http, URLSearchParams,RequestOptions} from "@angular/http";
import {Observable} from "rxjs/RX";

export class FileChangeDetail {
    constructor(public filePath: string, public content: string, public linesAdded: Number, public linesDeleted: Number) {

    }
}

export class FileChange {
    constructor(public filePath: string, public state: string) {

    }
}

@Injectable()
export class ChangeService {
    constructor(private http: Http) {

    }

    getChanges(): Observable<FileChange[]> {
        return this.http.get("api/changes/")
            .map(r => r.json());
    }

    getFileChange(fileName:string): Observable<FileChangeDetail> {
        let params: URLSearchParams = new URLSearchParams();
        
        let options       = new RequestOptions({ search : params });
        params.set('filePath', fileName);
        console.log(fileName);
        return this.http.get("api/changes/details",options)
            .map(r => r.json());
    }
}