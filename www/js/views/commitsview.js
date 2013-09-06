var CommitsView = Backbone.View.extend({
	initialize: function(params) {
		this.el = $("#repoCommitsBlock");
    	this.template = $("#repoCommitTpl").html();
		this.listenTo(this.model, "change", this.render);
	},

	render: function(params) {
		$(this.el).html(Mustache.render(this.template, { commits: this.model.toJSON(), repoName: params.repoName }));
	}
});