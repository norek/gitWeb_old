System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Branch;
    return {
        setters:[],
        execute: function() {
            class Branch {
                constructor(name, isRemote, tipSha, isCurrentRepositoryHead) {
                    this.name = name;
                    this.isRemote = isRemote;
                    this.tipSha = tipSha;
                    this.isCurrentRepositoryHead = isCurrentRepositoryHead;
                }
            }
            exports_1("Branch", Branch);
        }
    }
});
//# sourceMappingURL=Branch.js.map