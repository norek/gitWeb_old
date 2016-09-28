System.register(["@angular/core", "./tag.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tag_service_1;
    var TagComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tag_service_1_1) {
                tag_service_1 = tag_service_1_1;
            }],
        execute: function() {
            let TagComponent = class TagComponent {
                constructor(tagService) {
                    this.tagService = tagService;
                }
                ngOnInit() {
                    this.tagService.getTagList().subscribe(d => this.tagList = d);
                }
                onSelected(tag) {
                    this.selectedTag = tag;
                }
            };
            TagComponent = __decorate([
                core_1.Component({
                    selector: 'tag',
                    template: `<h1> TAGS </h1>
                <ul>
                    <li *ngFor="let tag of tagList" (click)="onSelect(tag)">
                        <span class="badge">{{tag.name}}</span>
                    </li>
                </ul>`,
                    providers: [tag_service_1.TagService]
                }), 
                __metadata('design:paramtypes', [tag_service_1.TagService])
            ], TagComponent);
            exports_1("TagComponent", TagComponent);
        }
    }
});
//# sourceMappingURL=tag.component.js.map