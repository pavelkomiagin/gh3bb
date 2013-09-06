var Repository = Backbone.Model.extend({
	initialize: function() {}
});

var Repositories = Backbone.Collection.extend({
	model: Repository,

	initialize: function(params) {
		this.url = "https://api.github.com/users/" + params.nick + "/repos";
	}
});

