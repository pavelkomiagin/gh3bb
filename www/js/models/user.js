var User = Backbone.Model.extend({
	initialize: function(params) {
		this.url = "https://api.github.com/users/" + params.nick;
	}
});