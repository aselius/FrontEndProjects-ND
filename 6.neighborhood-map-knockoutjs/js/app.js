var app = app || {};

app.googleErrorBool = false;

$(window).load(function() {

	app.appViewModel = new appViewModel();

	ko.applyBindings(app.appViewModel);

	app.appViewModel.initialize();

});

//Error handle for googleMap load failure.
googleError = function() {
	ko.applyBindings(app);
	app.googleErrorBool = true;
};

//Hamburger Menu handling javascript for mobile view

if($(window).width() < 701) {
	$( "#list-panel" ).hide();
}