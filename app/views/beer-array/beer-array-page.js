var createViewModel = require("./beer-array-view-model");
var Observable = require("data/observable");

var beerList = new createViewModel();
var pageData = new Observable.fromObject({
    beerList: beerList
});

function pageLoaded(args) {
    console.log("pageLoaded")
    var page = args.object; 
    page.bindingContext = pageData

    beerList.load(); 

}

exports.pageLoaded = pageLoaded;