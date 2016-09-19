System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Commit;
    return {
        setters:[],
        execute: function() {
            class Commit {
                constructor(message, id) {
                    this.message = message;
                    this.id = id;
                }
            }
            exports_1("Commit", Commit);
        }
    }
});
//# sourceMappingURL=Commit.js.map