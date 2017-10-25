var app = app || {};

var appViewModel = function() {
	var self = this;

	self.currentLocationString = ko.observable(app.mapModel.locationName);
	self.locationArray = ko.observableArray(app.placeList);
	self.filterKeywordString = ko.observable(app.filterOptions.keyword);
	self.filteredLocationArray = ko.observableArray(app.filteredList);
	self.placeMoreInfo = ko.observable();
	self.placeMoreInfoHeader = ko.observable();
	self.placeMoreInfoError = ko.observable(false);
	self.windowHeight = ko.observable();
	self.menuOpen = ko.observable(false);
	self.mobile = ko.observable(false);

	/**
	 * Initialize map and information window
	 * @ViewModel constructor
	 */
	self.initialize = function() {

		self.mapGeocoder = new google.maps.Geocoder();

		app.map = new google.maps.Map(document.getElementById('map-canvas'),app.mapOptions);
		app.infoWindow = new google.maps.InfoWindow();
		app.service = new google.maps.places.PlacesService(app.map);
		app.autoComplete = new google.maps.places.Autocomplete(document.getElementById('search-location'));
		app.autoComplete.bindTo('bounds', app.map);
		app.filterOn = false;

		//add an event listen for when user uses autocomplete to search a location.
		//there are 2 ways a user will choose a location (by clicking on autocomplete or by pressing enter)
		//this will handle clicking auto complete.
		app.autoComplete.addListener('place_changed', self.autoCompleteLocation);

		//sets initial markers and more info screen for the initial render.
		self.setInitialPlaceMoreInfo();
		setTimeout(self.performSearch, 300);
	};

	//Handles the case when the user uses the autocomplete featurea (click)
	// so that it achieves the same effect as pressing enter
	self.autoCompleteLocation = function() {
		var place = app.autoComplete.getPlace();
		if(place.formatted_address == undefined){
			self.currentLocationString(place.name);
		} else {
			//Just having this without a conditional statement was resulting in the Geocode breaking down since
			//the object place was not the full formatted autocomplete object when it was just manually entered.
			//Hence divided it so that it would treat the simple object with just .name and the complex one with
			//the formatted address attribute.
			self.currentLocationString(place.formatted_address);
		}
			if(!place.geometry) {
				return;
			}
			if (place.geometry.viewport) {
				app.map.fitBounds(place.geometry.viewport);
			} else {
				app.map.setCenter(place.geometry.location);
				app.map.setZoom(app.mapOptions.zoom);
			}
			var address = '';
			if (place.address_components) {
				address = [
					(place.address_components[0] && place.address_components[0].short_name || ''),
					(place.address_components[1] && place.address_components[1].short_name || ''),
					(place.address_components[2] && place.address_components[2].short_name || '')
				].join('');
			}
			self.getPlaceMoreInfo(self.currentLocationString());
			self.performSearch();
		};

	//Perform search to fetch the markers and the list.
	self.performSearch = function() {
		//remove all entities from location list.
		self.removeMarkers();
		self.locationArray.removeAll();
		self.filteredLocationArray.removeAll();
		var request = {
			bounds: app.map.getBounds(),
			type: ['bar']
		};
		app.service.nearbySearch(request,self.callback);
	};

	self.callback = function(results, status) {
		if (status !== google.maps.places.PlacesServiceStatus.OK) {
			console.error(status);
			return;
		}
		for (var i = 0, result; result = results[i]; i++) {
			//push result to model and add markers.
			self.pushLocationToArray(self.locationArray,result);
			self.pushLocationToArray(self.filteredLocationArray,result);

		}
		if (app.filterOn) {
			self.filterLocations();
			for (var j = 0; j < self.filteredLocationArray().length; j++) {
				self.addMarker(self.filteredLocationArray()[j]);
			}
		} else {
			for (var k = 0, result; result = results[k]; k++) {
				self.addMarker(self.filteredLocationArray()[k]);
			}
		}
	};

	self.pushLocationToArray = function (koArray,data) {
		koArray.push(data);
	};

	self.addMarker = function(place) {
		var marker = new google.maps.Marker({
			map: app.map,
			position: place.geometry.location,
			icon: {
				url: 'http://maps.gstatic.com/mapfiles/ms2/micons/ltblue-dot.png',
				anchor: new google.maps.Point(10, 10)
			},
			animation: google.maps.Animation.DROP
		});

		place.marker = marker;
		self.clickListener(marker,place);
	};

	/**
	 * Eventhandler for on click infowindows
	 * @param {object} object - object clicked (marker)
	 * @param {object} data - object with place information
	 */
	self.clickListener = function(object, data) {
		//on click event for information window on markers!
		google.maps.event.addListener(object, 'click', function() {
			app.service.getDetails(data, function(result,status) {
				if (status !== google.maps.places.PlacesServiceStatus.OK) {
					console.error(status);
					return;
				}
				// umm so yeah "\n" only works for javascript strings.. not when read on browser.. i guess too much c++.
				// some places do not have opening hours recorded, and causes an error when clicked on. resolve with an if statement.
				var contentString = "<p>" + result.name + "</p><p>" + "Rating: ";
				if (result.rating == null) {
					contentString += "Not Available" + "</p><p>" + "Address: " + result.formatted_address + "</p><p>Phone Number: " + result.formatted_phone_number + "</p><p>" + "Hours of Operation</p><p>";
				}
				else {
					contentString += + result.rating + "</p><p>" + "Address: " + result.formatted_address + "</p><p>Phone Number: " + result.formatted_phone_number + "</p><p>" + "Hours of Operation</p><p>";
				}
				if (result.opening_hours == null) {
					contentString += "Not Available";
				} else {
					for (var i = 0; i < 7; i++) {
						contentString += result.opening_hours.weekday_text[i] + "</p><p>";
					}
				}
				contentString.concat("</p>");
				app.infoWindow.setContent(contentString);

				app.infoWindow.open(app.map, object);
			});
			if(object.animation !== null) {
				object.setAnimation(null);
			} else {
				object.setAnimation(google.maps.Animation.BOUNCE);
				setTimeout(function(){ object.setAnimation(null);}, 1400);
			}
		});
	};

	self.setMapOnAll = function(map) {
		for (var i = 0; i < self.filteredLocationArray().length; i++) {
			self.filteredLocationArray()[i].marker.setMap(map);
		}
	};

	self.removeMarkers = function() {
		self.setMapOnAll(null);
	};

	self.geocodeAddress = function(geocoder, resultsMap) {
		var address = self.currentLocationString();
		geocoder.geocode({'address': address}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				resultsMap.setCenter(results[0].geometry.location);
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	};

	//this will handle location search view change when the user presses enter
	self.locationChangeOnSubmit = function() {
		self.geocodeAddress(self.mapGeocoder,app.map);
		self.getPlaceMoreInfo(self.currentLocationString());
		self.performSearch();
	};

	self.filterLocations = function() {
		self.filteredLocationArray.removeAll();
		for (i=0; i<self.locationArray().length; i++) {
			self.locationArray()[i].marker.setVisible(false);
			var bool = self.locationArray()[i].name.includes(self.filterKeywordString() && self.filterKeywordString().toLowerCase() && self.filterKeywordString().toUpperCase() && self.filterKeywordString()[0].toUpperCase() + self.filterKeywordString().slice(1));
			if (bool) {
				self.filteredLocationArray.push(self.locationArray()[i]);
				self.locationArray()[i].marker.setVisible(true);
			}
		}
	};

	//this will handle filter results when the user presses enter
	self.filterLocationOnSubmit = function() {
		if(app.appViewModel.filterKeywordString() !== '') {
			app.filterOn = true;
			self.filterLocations();
		}
		else {
			app.filterOn = false;
			self.filterLocations();
		}
	};

	//link click on list to click on marker.
	self.listClicked = function(data) {
		google.maps.event.trigger(self.filteredLocationArray()[data].marker, 'click');
		if($(window).width() < 701) {
			window.scrollTo(0,0);
			$("#list-panel").toggle("slide");
			self.menuOpen(false);
		}
	};

	//Handle more info with Duck Duck Go API.
	self.setPlaceMoreInfo = function(data) {
		self.placeMoreInfo(data);
	};

	self.setPlaceMoreInfoHeader = function(data) {
		self.placeMoreInfoHeader(data);
	};

	self.setInitialPlaceMoreInfo = function() {
		var queryString = self.currentLocationString();
		var result = self.getPlaceMoreInfo(queryString);
		self.placeMoreInfo(result);
	};

	self.checkMoreInfoResult = function() {
		return (self.placeMoreInfo() === "");
	};

	/**
	 * Fetches search queries from Duck Duck Go.
	 * @param {string} query - search keyword.
	 */
	self.getPlaceMoreInfo = function(query) {
		var url = "http://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'JSONP'
		})
		.done(function(data){
			self.placeMoreInfoError(false);
			self.setPlaceMoreInfo(data);
			self.setPlaceMoreInfoHeader(data.Heading);

		})
		.fail(function(data){
			self.placeMoreInfoError(true);
		});
	};


	self.openMenu = function() {
		$("#list-panel").toggle("slide");
		self.menuOpen(true);
	};

	self.hamburgerStatus = ko.pureComputed(function() {
		return self.menuOpen() ? "hideElement" : "hamburger";
	})

	self.crossStatus = ko.pureComputed(function() {
		return self.menuOpen() ? "cross" : "hideElement";
	})

	self.closeMenu = function() {
		$("#list-panel").toggle("slide");
		self.menuOpen(false);
	};
};

