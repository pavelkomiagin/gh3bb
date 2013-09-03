var CommitsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		$('#repoCommitsBlock').html('');
		var lastDate = new Date(1);
		this.model.each(function(commit) {
			var tpl = $($('#repoCommitTpl').html());
			var isAnotherDate = true;

			if(commit.get("Date").getFullYear() == lastDate.getFullYear()) {
				if(commit.get("Date").getMonth() == lastDate.getMonth()) {
					if(commit.get("Date").getDate() == lastDate.getDate()) {
						isAnotherDate = false;
					}
				}
			}

			if(isAnotherDate) {
				lastDate = commit.get("Date");
				tpl.find('.message').html(commit.get("Message"));
				tpl.find('.gravatar').attr("src", commit.get("AuthorAvatarUrl"));
				tpl.find('.author-name a').attr("href", "#/users/" + commit.get("AuthorName")).html(commit.get("AuthorName"));
				tpl.find('.commit-group-heading').html(commit.get("Date").toDateString());
				$('#repoCommitsBlock').append(tpl);
			}
			else {
				var thisDateCommitTpl = $(tpl.find('.commit-group').html());
				thisDateCommitTpl.find('.message').html(commit.get("Message"));
				thisDateCommitTpl.find('.gravatar').attr("src", commit.get("AuthorAvatarUrl"));
				thisDateCommitTpl.find('.author-name a').attr("href", "#/users/" + commit.get("AuthorName")).html(commit.get("AuthorName"));
				thisDateCommitTpl.find('.commit-group-heading').html(commit.get("Date").toDateString());
				$('#repoCommitsBlock li:last').after(thisDateCommitTpl);
			}

			
		});
	}
});