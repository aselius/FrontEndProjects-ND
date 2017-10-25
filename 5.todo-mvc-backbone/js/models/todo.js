/* Todo Model
*  - title stores todo item title.
*  - completed status indicates if todo is complete.
*  - toggle method to switch model completed from false to true and vise versa.
*/

var app = app || {};

// extend model using backbone js
app.Todo = Backbone.Model.extend({
	// set default attributes so that each has an empty title and false complete
	defaults : {
		title : '',
		completed : false
	},

	// toggle the completed to the opposite value when the toggle function is called.
	toggle : function(){
		this.save({
			completed : !this.get('completed')
		});
	}

});