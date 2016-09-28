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
                __metadata('design:paramtypes', [(typeof (_a = typeof tag_service_1.TagService !== 'undefined' && tag_service_1.TagService) === 'function' && _a) || Object])
            ], TagComponent);
            exports_1("TagComponent", TagComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFDSSxZQUFvQixVQUFzQjtvQkFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtnQkFFMUMsQ0FBQztnQkFLRCxRQUFRO29CQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUVELFVBQVUsQ0FBQyxHQUFXO29CQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDM0IsQ0FBQztZQUNMLENBQUM7WUEzQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsS0FBSztvQkFDZixRQUFRLEVBQUU7Ozs7O3NCQUtRO29CQUNsQixTQUFTLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO2lCQUUxQixDQUFDOzs0QkFBQTtZQUVGLHVDQWVDLENBQUEiLCJmaWxlIjoiYXBwL3RhZy90YWcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1RhZ1NlcnZpY2UgfSBmcm9tIFwiLi90YWcuc2VydmljZVwiO1xyXG5pbXBvcnQge0dpdFRhZ30gZnJvbSBcIi4vZ2l0dGFnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFnJyxcclxuICAgIHRlbXBsYXRlOiBgPGgxPiBUQUdTIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnTGlzdFwiIChjbGljayk9XCJvblNlbGVjdCh0YWcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj57e3RhZy5uYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+YCxcclxuICAgIHByb3ZpZGVyczogW1RhZ1NlcnZpY2VdXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFnU2VydmljZTogVGFnU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRhZ0xpc3Q6IEdpdFRhZ1tdO1xyXG4gICAgc2VsZWN0ZWRUYWc6IEdpdFRhZztcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRhZ1NlcnZpY2UuZ2V0VGFnTGlzdCgpLnN1YnNjcmliZShkID0+IHRoaXMudGFnTGlzdCA9IGQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0ZWQodGFnOiBHaXRUYWcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFnID0gdGFnO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
