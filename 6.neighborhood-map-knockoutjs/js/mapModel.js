var app = app || {};

//app.model = ko.obervableArray();

app.mapModel = {
	locationName: 'Auckland',

};

app.mapOptions = {
	center: {lat:-36.8667, lng: 174.767},
	zoom: 13,
	disableDefaultUI: true,
	draggable: true
}

app.filterOptions = {
	keyword: ''
}

app.placeList = [];

app.filteredList = [];