var Repositories = Backbone.Collection.extend({
	model: Repository,

	initialize: function() {
		var This = this;

		// get repos
		var repos = getJSONApiResult({service: "users/Aristokrat/repos"}, function(data) {
			for(var i = 0; i < data.length; i++) {
				var repo = new Repository({
					"Name": data[i].name,
					"Url": data[i].html_url
				});
				This.add(repo);
			}
			new RepositoriesView({model: This});
			This.trigger("change");
			//console.log(This);
		});
	}
});

var a = new Repositories();


var Repository = Backbone.Model.extend({
	defaults: {
		"Name": "",
		"Url": ""
	},

	initialize: function() {
		var This = this;
	}
});