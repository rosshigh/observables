var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var Data = require('../shared/data'); 
let beerData =new Data();

function createViewModel() {
    var viewModel = new ObservableArray();

    viewModel.load = function(){
        beerData.forEach(item => {
            console.log(item.name)
            viewModel.push({
                name: item.name,
                description: item.description,
                alcohol: item.abv,
                img: item.img
            })
        });
    }


    return viewModel;
}

module.exports = createViewModel;