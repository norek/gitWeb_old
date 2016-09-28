System.register(["@angular/core", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var CommitChangesService, CommitChange;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let CommitChangesService = class CommitChangesService {
                constructor(http) {
                    this.http = http;
                }
                getCommitChanges(commitId) {
                    return this.http.get('/api/commit/' + commitId + '/changes')
                        .map(d => d.json());
                }
            };
            CommitChangesService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
            ], CommitChangesService);
            exports_1("CommitChangesService", CommitChangesService);
            class CommitChange {
                constructor(status, path) {
                    this.status = status;
                    this.path = path;
                }
            }
            exports_1("CommitChange", CommitChange);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY2hhbmdlcy9jb21taXQtY2hhbmdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQ0ksWUFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUU5QixDQUFDO2dCQUVELGdCQUFnQixDQUFDLFFBQWdCO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7eUJBQ3ZELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBRTVCLENBQUM7WUFDTCxDQUFDO1lBWEQ7Z0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7WUFDYix1REFVQyxDQUFBO1lBRUQ7Z0JBRUksWUFBbUIsTUFBYyxFQUFTLElBQVk7b0JBQW5DLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtnQkFFdEQsQ0FBQztZQUVMLENBQUM7WUFORCx1Q0FNQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21taXQvY2hhbmdlcy9jb21taXQtY2hhbmdlcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUlhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbW1pdENoYW5nZXNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1pdENoYW5nZXMoY29tbWl0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29tbWl0Q2hhbmdlW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9jb21taXQvJyArIGNvbW1pdElkICsgJy9jaGFuZ2VzJylcclxuICAgICAgICAgICAgLm1hcChkID0+IGQuanNvbigpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21taXRDaGFuZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0dXM6IHN0cmluZywgcHVibGljIHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
