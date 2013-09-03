var RepositoriesView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		this.model.each(function(repo) {
			$('#reposList').append(repo.get("Name"));
		});
	}
});