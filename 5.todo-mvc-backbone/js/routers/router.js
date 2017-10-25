var app = app || {};

/* Todo Routing
*  this is the router
*  this will handle the list of items that can be filtered
*  by completed, all, and remaining.
*/


var Workspace = Backbone.Router.extend({

	routes : {
		'*filter' : 'setFilter'
	},

	setFilter : function( param ) {
		if (param) {
			param = param.trim();
		}
		app.TodoFilter = param || '';

		app.Todos.trigger('filter');
	}

});

app.TodoRouter = new Workspace();
Backbone.history.start();