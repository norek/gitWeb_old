System.register(["@angular/platform-browser-dynamic", "./app.module"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
                .catch(err => console.error(err));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFHQSxpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDO2lCQUM5QyxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGxhdGZvcm1Ccm93c2VyRHluYW1pY30gICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiO1xyXG5pbXBvcnQge0FwcE1vZHVsZX0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
