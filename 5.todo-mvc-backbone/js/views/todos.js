var app = app || {};

/* Todo item View
*  this is the view for the individual todo items
*  this will handle the creation of new todos and rendering of the initial todo lists
*
*/

app.TodoView = Backbone.View.extend({

	//create new lis
	tagName : 'li',

	//reference the template in HTML. cache the template for a single item
	template : _.template( $('#item-template').html() ),

	events : {
		'dblclick label' : 'edit',
		'keypress .edit' : 'updateOnEnter',
		'blur .edit' : 'close',
		'click .toggle' : 'togglecompleted',
		'click .destroy' : 'clear',
	},

	//initializes an event listener so that when the todo gets updated, the application will rerender
	initialize : function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'visible', this.toggleVisible);
	},

	//we render the template referenced above.
	// this replaces the content of the view's element
	render : function() {
		this.$el.html( this.template( this.model.attributes) );
		this.$el.toggleClass( 'completed', this.model.get('completed') );
		this.toggleVisible();

		this.$input = this.$('.edit');
		return this;
	},

	//the visible event is bound to this method
	toggleVisible : function() {
		this.$el.toggleClass('hidden', this.isHidden());
	},

	//determines if the todo should be visible and updates it accordingly.
	isHidden : function() {
		var isCompleted = this.model.get('completed');
		return (
			(!isCompleted && app.TodoFilter === 'completed')
			|| (isCompleted && app.TodoFilter === 'active')
		);
	},

	//uses the method in the model to mark it as complete and saves
	// this cascades a change event which leads to render which toggles the completed class
	// so that css change is applied. this also triggers the change:complete in the appview
	// and triggers filterOne which triggers a visible event. This is used in conjunction
	// with the filtering in our routes and collections so that we only display an item if
	// its completed state falls in line with the current filter.
	togglecompleted : function() {
		this.model.toggle();
	},

	//switch the todo into editing mode
	edit : function() {
		this.$el.addClass('editing');
		this.$input.focus();
	},

	//close editing mode when enter is pressed.
	updateOnEnter : function(e) {
		if (e.which === ENTER_KEY) {
			this.close();
		}
	},

	//closes the editing mode and displays the finished edit
	close : function() {
		var value = this.$input.val().trim();

		if(value) {
			this.model.save({ title : value });
		}

		this.$el.removeClass('editing');
	},

	//calls destory on the model when delete is pressed.
	// this calls the remove method (listenTo) which deletes the view and removes the
	// associated elements from the DOM.
	// memory leak is prevented https://unspace.ca/dev/2013/avoiding-memory-leaks-in-backbone-js
	// destroy removes the model from the collection, and hence triggers a remove event on the collection.
	// and also rerenders since in the AppView all is tied to render.
	clear : function() {
		this.model.destroy();
	}

});