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
//# sourceMappingURL=Commit.js.map