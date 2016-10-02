import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";export class Branch {
    constructor(public name: string, public isRemote: Boolean, public tipSha: string) {

    }
}