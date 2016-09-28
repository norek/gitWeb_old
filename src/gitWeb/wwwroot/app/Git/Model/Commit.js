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
                constructor(name, date, email) {
                    this.name = name;
                    this.date = date;
                    this.email = email;
                }
            }
            exports_1("Author", Author);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9HaXQvTW9kZWwvQ29tbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFDSSxZQUFtQixPQUFlLEVBQVMsRUFBVSxFQUFTLE1BQWMsRUFBUyxXQUFtQjtvQkFBckYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBRXhHLENBQUM7WUFDTCxDQUFDO1lBSkQsMkJBSUMsQ0FBQTtZQUVEO2dCQUVJLFlBQW1CLElBQVksRUFBUyxJQUFVLEVBQVMsS0FBYTtvQkFBckQsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBRXhFLENBQUM7WUFFTCxDQUFDO1lBTkQsMkJBTUMsQ0FBQSIsImZpbGUiOiJhcHAvR2l0L01vZGVsL0NvbW1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21taXQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZywgcHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBhdXRob3I6IEF1dGhvciwgcHVibGljIHNob3JNZXNzYWdlOiBzdHJpbmcpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRob3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBkYXRlOiBEYXRlLCBwdWJsaWMgZW1haWw6IHN0cmluZykge1xyXG5cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
