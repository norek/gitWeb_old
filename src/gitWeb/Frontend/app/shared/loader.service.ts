import {Component, Injectable} from "@angular/core";

export interface ILoader {
    isLoading: boolean;
}

@Injectable()
export class LoaderService {
    loader: ILoader = { isLoading: false };

    showLoader():void{
        this.loader.isLoading = true;
    }

    hideLoader():void{
        this.loader.isLoading = false;
    }
}

