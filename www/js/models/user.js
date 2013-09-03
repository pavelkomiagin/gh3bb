var User = Backbone.Model.extend({
	defaults: {
		"Name": "",
		"AvatarUrl": "",
		"Url": "",
		"Email": "",
		"ReposCount": 0
	},

	initialize: function() {
		var This = this;
		new UserInfoView({model: This});

		// get user data
		var gitHubUser = getJSONApiResult({service: "users/Aristokrat"}, function(data) {
			This.set({
				Name: data.login,
				AvatarUrl: data.avatar_url,
				Url: data.html_url,
				Email: data.email,
				ReposCount: data.public_repos
			});
		});
	},
});