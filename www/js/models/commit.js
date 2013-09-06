var Commit = Backbone.Model.extend({
	initialize: function() {}
});

var Commits = Backbone.Collection.extend({
	model: Commit,

	initialize: function(params) {
		this.url = "https://api.github.com/repos/" + params.nick + "/" + params.repoName + "/commits";
	}
});