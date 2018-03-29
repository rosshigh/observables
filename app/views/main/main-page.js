var Observable = require("data/observable");
var frameModule = require("ui/frame");

var page;

var model = { someVariable: "SomeValue" };

function pageLoaded(args) {
    page = args.object; 
    page.bindingContext = model
}

exports.pageLoaded = pageLoaded;

exports.onButtonClick = function(args){
   alert("The input is " + model.someVariable)
}

exports.onBeerArrayTap = function(){
    frameModule.topmost().navigate('views/beer-array/beer-array-page');
}

exports.onArrayTap = function(){
    frameModule.topmost().navigate('views/array/array');
}

exports.onObservableTap = function(){
    frameModule.topmost().navigate('views/observable/observable-page');
}

exports.onSimpleArrayTap = function(){
    frameModule.topmost().navigate('views/simpleArray/simpleArray-page');
}