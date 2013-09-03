var Commits = Backbone.Collection.extend({
	model: Commit,

	initialize: function() {
		var This = this;

		// get commits
		getJSONApiResult({service: "repos/" + AppData.currentUserNick + "/" + AppData.currentRepoName + "/commits"}, function(data) {
			for(var i = 0; i < data.length; i++) {
				var commit = new Commit({
					"Message": data[i].commit.message,
					"AuthorAvatarUrl": data[i].author.avatar_url,
					"NeedLoadData": false
				});
				This.add(commit);
			}
			new CommitsView({model: This});
			This.trigger("change");
		});
	}
});

var Commit = Backbone.Model.extend({
	defaults: {
		"Message": "",
		"AuthorAvatarUrl": "",
		"NeedLoadData": true
	},

	initialize: function() {
		var This = this;
		/*if(this.get("NeedLoadData")) {
			getJSONApiResult({service: "repos/" + AppData.currentUserNick + "/lineq"}, function(data) {
				new RepositoryView({model: This});
				This.trigger("change");
			});
		}*/
		
	}
});