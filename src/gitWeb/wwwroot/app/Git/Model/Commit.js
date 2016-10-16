System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Commit, Author;
    return {
        setters:[],
        execute: function() {
            class Commit {
                constructor(message, id, author, shorMessage) {
                    this.message = message;
                    this.id = id;
                    this.author = author;
                    this.shorMessage = shorMessage;
                }
            }
            exports_1("Commit", Commit);
            class Author {
                constructor(name, date, email, tags, branchName) {
                    this.name = name;
                    this.date = date;
                    this.email = email;
                    this.tags = tags;
                    this.branchName = branchName;
                }
            }
            exports_1("Author", Author);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9HaXQvTW9kZWwvQ29tbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFDSSxZQUFtQixPQUFlLEVBQVMsRUFBVSxFQUFTLE1BQWMsRUFBUyxXQUFtQjtvQkFBckYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBRXhHLENBQUM7WUFDTCxDQUFDO1lBSkQsMkJBSUMsQ0FBQTtZQUVEO2dCQUVJLFlBQW1CLElBQVksRUFBUyxJQUFVLEVBQVMsS0FBYSxFQUFTLElBQWMsRUFBUyxVQUFrQjtvQkFBdkcsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBVTtvQkFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO2dCQUUxSCxDQUFDO1lBRUwsQ0FBQztZQU5ELDJCQU1DLENBQUEiLCJmaWxlIjoiYXBwL0dpdC9Nb2RlbC9Db21taXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tbWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcsIHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgYXV0aG9yOiBBdXRob3IsIHB1YmxpYyBzaG9yTWVzc2FnZTogc3RyaW5nKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgZGF0ZTogRGF0ZSwgcHVibGljIGVtYWlsOiBzdHJpbmcsIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSwgcHVibGljIGJyYW5jaE5hbWU6IHN0cmluZykge1xyXG5cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
