var frameModule = require("ui/frame");

var model = { 
	mySimpleArray: ['item 1', 'item 2', 'item 3'],
	myComplexArray: [{name: "item 1", color: 'yellow', qty: 14},{name: "item 2", color: 'red', qty: 4},{name: "item 3", color: 'blue', qty: 10}],
	newItem: ""
};

var page;

exports.pageLoaded = function(args) {
	page = args.object; 
    page.bindingContext = model
}

exports.onTapAddItem = function(){
	model.mySimpleArray.push(model.newItem);
	alert('The array has ' + model.mySimpleArray.length + ' items')
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
