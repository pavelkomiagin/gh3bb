var User = Backbone.Model.extend({
	defaults: {
		"Name": "",
		"AvatarUrl": "",
		"Url": "",
		"Email": "",
		"ReposCount": 0,
		"Nick": "",
		"Joined": new Date()
	},

	initialize: function(params) {
		var This = this;
		new UserInfoView({model: This});

		// get user data
		var gitHubUser = getJSONApiResult({ service: "users/" + AppData.currentUserNick }, function(data) {
			This.set({
				Name: data.name,
				AvatarUrl: data.avatar_url,
				Url: data.html_url,
				Email: data.email,
				ReposCount: data.public_repos,
				Joined: new Date(data.created_at)
			});
		});
	},
});