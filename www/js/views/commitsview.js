var CommitsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		$('#repoCommitsBlock').html('');
		this.model.each(function(commit) {
			var tpl = $($('#repoCommitTpl').html());
			tpl.find('.message').html(commit.get("Message"));
			tpl.find('.gravatar').attr("src", commit.get("AuthorAvatarUrl"));
			//tpl.find('.repo-list-item').attr("href", repo.get("FullName"));
			$('#repoCommitsBlock').append(tpl);
		});
	}
});