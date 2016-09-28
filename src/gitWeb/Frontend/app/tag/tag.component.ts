import {Component,OnInit} from "@angular/core";
import {TagService } from "./tag.service";
import {GitTag} from "./gittag";

@Component({
    selector: 'tag',
    template: `<h1> TAGS </h1>
                <ul>
                    <li *ngFor="let tag of tagList" (click)="onSelect(tag)">
                        <span class="badge">{{tag.name}}</span>
                    </li>
                </ul>`,
    providers: [TagService]

})

export class TagComponent implements OnInit{
    constructor(private tagService: TagService) {
        
    }

    tagList: GitTag[];
    selectedTag: GitTag;

    ngOnInit(): void {
        this.tagService.getTagList().subscribe(d => this.tagList = d);
    }

    onSelected(tag: GitTag): void {
        this.selectedTag = tag;
    }
}