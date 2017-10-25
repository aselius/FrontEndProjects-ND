/* Todos collection
*  - use localstorage adaptor to override Backbone's default sync()
*
*/


var app = app || {};

var TodoList = Backbone.Collection.extend({

	// Reference base model of this collection to app.Todo
	model : app.Todo,

	// Save all of the todo list items to a local storage with todos-backbone namespace.
	localStorage : new Backbone.LocalStorage('todos-backbone'),

	// tie in with the templates we have established in  HTML.
	// completed function filters down the list of items to those finished.
	completed : function() {
		return this.filter( function(todo) {
			return todo.get('completed');
		});
	},

	// remaining function does the same as completed but opposite, getting only the ones incomplete.
		// _.without(array,values) returns a copy of the array with all instances of the values removed.
	remaining : function() {
		return this.without.apply( this, this.completed() );
	},

	// nextOrder generates the next order nmumber for the new items.
	// this is a sequence generator
	nextOrder : function() {
		if ( !this.length ) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	// sort todos by their original insertion order.
	comparator : function( todo ) {
		return todo.get('order');
	}

});

app.Todos = new TodoList();
