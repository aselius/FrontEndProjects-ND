var app = app || {};

/* App View
*  this is the view for the app at the highest level.
*  this will handle the creation of new todos and rendering of the initial todo lists
*
*/
app.AppView = Backbone.View.extend({

	//bind to the main segment of the markup.
	el : '#todoapp',

	//reference the template for stats at the bottom of the app
	//constructs a statsTemplate object from the template in HTML
	//we will be using this in render.
	statsTemplate : _.template( $('#stats-template').html() ),

	//delegated events for creating new items and clearing completed ones.
	events : {
		'keypress #new-todo' : 'createOnEnter',
		'click #clear-completed' : 'clearCompleted',
		'click #toggle-all' : 'toggleAllComplete'
	},

	//initialize by binding events on the Todos collection
	// which listens to adds or resets on the collection
	initialize : function() {
		//cache elements. (this.$() refers to the elements in this.$el)
		this.allCheckbox = this.$('#toggle-all')[0];
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');

		// we are delegating the updates and deletes to the TodoViews
		this.listenTo(app.Todos, 'add', this.addOne);
		this.listenTo(app.Todos, 'reset', this.addAll);

		this.listenTo(app.Todos, 'change:completed', this.filterOne);
		this.listenTo(app.Todos, 'filter', this.filterAll);
		this.listenTo(app.Todos, 'all', this.render);
		//load any preexisting todos
		app.Todos.fetch();
	},

	//re-rendering the app is resetting the statistics.
	render : function() {
		var completed = app.Todos.completed().length;
		var remaining = app.Todos.remaining().length;
		//main and footer are displayed or hidden depending on whether there are any todos
		if ( app.Todos.length ) {
			this.$main.show();
			this.$footer.show();

			//footer contains the number of remaining and completed items
			this.$footer.html(this.statsTemplate({
				completed : completed,
				remaining : remaining
			}));

			//conditional css handling / setting router
			this.$('#filters li a')
				.removeClass('selected')
				.filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
				.addClass('selected');
		} else {
			this.$main.hide();
			this.$footer.hide();
		}

		this.allCheckbox.checked = !remaining;

	},


	//when a new model is added to the collection this function is invoked.
	// we want it to create a view for the todo created and append the render to the ul on the markup
	addOne : function(todo) {
		//new model is passed,new TodoView is created and appends the resulting el to Todo List
		var view = new app.TodoView({ model : todo });
		$('#todo-list').append( view.render().el );
	},

	//this adds all the elements at once when the collection is reset. (when loaded from storage etc.)
	addAll : function() {
		//clear el
		this.$('#todo-list').html('');
		//add all with addOne and each
		app.Todos.each(this.addOne, this);
	},

	//listens for changes to 'completed' for any model in the collection
	filterOne : function(todo) {
		todo.trigger('visible');
	},

	//toggles which todo items are visible based on the filter currently selected (completed, reamaining, all)
	filterAll : function() {
		app.Todos.each(this.filterOne, this);
	},

	//returns an object literal
	newAttributes : function() {
		return {
			title : this.$input.val().trim(),
			order : app.Todos.nextOrder(),
			completed : false
		}
	},

	//creates new todo model in localstorage when user presses enter on the input
	// and resets the input field value.
	createOnEnter : function(e) {
		if ( e.which !==ENTER_KEY || !this.$input.val().trim() ) {
			return;
		}

		app.Todos.create( this.newAttributes() );
		this.$input.val('');
	},

	//remove all marked completed
	clearCompleted : function() {
		_.invoke(app.Todos.completed(), 'destroy');
		return false;
	},

	//marks all item as complete by clicking the toggle all checkbox
	toggleAllComplete : function() {
		//boolean
		var completed = this.allCheckbox.checked;

		//saves each todo with completed marked
		app.Todos.each(function( todo ) {
			todo.save({
				'completed' : completed
			});
		});
	}

});