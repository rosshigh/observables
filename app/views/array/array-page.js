// var Observable = require("data/observable");
// var ObservableArray = require("data/observable-array").ObservableArray;

// var mySimpleArray = ['item 1', 'item 2', 'item 3'];

// var pageData = new Observable.fromObject({
//     simpleArray: mySimpleArray
// });

var page;

exports.pageLoaded = function(args) {
    page = args.object; 
    // page.bindingContext = pageData
}
