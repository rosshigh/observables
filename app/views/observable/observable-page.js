var Observable = require("data/observable");
var frameModule = require("ui/frame");

var page;

var pageData = new Observable.fromObject({
    someVariable: ""
});

exports.pageLoaded = function(args) {
    page = args.object; 
    page.bindingContext = pageData
}

exports.onButtonClick = function(args){
	alert("The input is " + pageData.someVariable);
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