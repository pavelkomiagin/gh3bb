var Repositories = Backbone.Collection.extend({
	model: Repository,

	initialize: function() {
		var This = this;

		// get repos
		var repos = getJSONApiResult({service: "users/" + AppData.currentUserNick + "/repos"}, function(data) {
			for(var i = 0; i < data.length; i++) {
				var repo = new Repository({
					"Name": data[i].name,
					"Url": data[i].html_url,
					"Description": data[i].description,
					"FullName": data[i].full_name,
					"OwnerName": This.get("OwnerName")
				});
				This.add(repo);
			}
			new RepositoriesView({model: This});
			This.trigger("change");
		});
	}
});

var Repository = Backbone.Model.extend({
	defaults: {
		"Name": "",
		"Url": "",
		"Description": "",
		"FullName": "",
		"OwnerName": ""
	},

	initialize: function() {
		var This = this;
	}
});