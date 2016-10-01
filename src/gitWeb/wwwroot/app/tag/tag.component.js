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
                    template: `<details>
                    <summary class="header"> Tags </summary>
                <ul>
                    <li *ngFor="let tag of tagList" (click)="onSelect(tag)">
                        <span class="badge">{{tag.name}}</span>
                    </li>
                </ul>
                </details>`,
                    providers: [tag_service_1.TagService]
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof tag_service_1.TagService !== 'undefined' && tag_service_1.TagService) === 'function' && _a) || Object])
            ], TagComponent);
            exports_1("TagComponent", TagComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFDSSxZQUFvQixVQUFzQjtvQkFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtnQkFFMUMsQ0FBQztnQkFLRCxRQUFRO29CQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUVELFVBQVUsQ0FBQyxHQUFXO29CQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDM0IsQ0FBQztZQUNMLENBQUM7WUE3QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsS0FBSztvQkFDZixRQUFRLEVBQUU7Ozs7Ozs7MkJBT2E7b0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLHdCQUFVLENBQUM7aUJBRTFCLENBQUM7OzRCQUFBO1lBRUYsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAvdGFnL3RhZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VGFnU2VydmljZSB9IGZyb20gXCIuL3RhZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2l0VGFnfSBmcm9tIFwiLi9naXR0YWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0YWcnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeSBjbGFzcz1cImhlYWRlclwiPiBUYWdzIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHRhZyBvZiB0YWdMaXN0XCIgKGNsaWNrKT1cIm9uU2VsZWN0KHRhZylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7dGFnLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5gLFxyXG4gICAgcHJvdmlkZXJzOiBbVGFnU2VydmljZV1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWdTZXJ2aWNlOiBUYWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdGFnTGlzdDogR2l0VGFnW107XHJcbiAgICBzZWxlY3RlZFRhZzogR2l0VGFnO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGFnU2VydmljZS5nZXRUYWdMaXN0KCkuc3Vic2NyaWJlKGQgPT4gdGhpcy50YWdMaXN0ID0gZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RlZCh0YWc6IEdpdFRhZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWcgPSB0YWc7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
