var Observable = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var frameModule = require("ui/frame");

var mySimpleArray = new ObservableArray(['item 1', 'item 2', 'item 3']);


var pageData = Observable.fromObject({
	simpleArray: mySimpleArray,
	newItem: ""
});
var page;

exports.pageLoaded = function(args) {
	page = args.object; 
    page.bindingContext = pageData
}

exports.onTapAddItem = function(){
	mySimpleArray.push(pageData.newItem);
}

exports.onBeerArrayTap = function(){
	frameModule.topmost().navigate('views/beer-array/beer-array-page');
}

exports.onObservableTap = function(){
	frameModule.topmost().navigate('views/observable/observable-page');
}

exports.onObjectTap = function(){
	frameModule.topmost().navigate('views/main/main-page');
}

exports.onArrayTap = function(){
	frameModule.topmost().navigate('views/array/array');
}

exports.onSimpleArrayTap = function(){
    frameModule.topmost().navigate('views/simpleArray/simpleArray-page');
}

exports.onSimpleArrayTap = function(){
    frameModule.topmost().navigate('views/simpleArray/simpleArray-page');
}
