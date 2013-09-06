var RepositoriesView = Backbone.View.extend({
	initialize: function() {
		this.el = $("#reposBlock");
    	this.template = $("#repoTpl").html();
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		$(this.el).html(Mustache.render(this.template, { repos: this.model.toJSON() }));
	}
});