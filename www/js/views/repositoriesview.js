var RepositoriesView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		this.model.each(function(repo) {
			var tpl = $($('#repoTpl').html());
			tpl.find('.repo').html(repo.get("Name"));
			tpl.find('.repo-description').html(repo.get("Description"));
			$('.repo-list').append(tpl);
		});
	}
});