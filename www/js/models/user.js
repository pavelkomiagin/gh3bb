var User = Backbone.Model.extend({
	defaults: {
		"Name": "",
		"AvatarUrl": "",
		"Url": "",
		"Email": "",
		"ReposCount": 0
	},

	initialize: function() {
		// get user data
		var gitHubUser = getJSONApiResult({service: "users/Aristokrat"}, function(data) {
			this.Name = data.login;
			this.AvatarUrl = data.avatar_url;
			this.Url = data.html_url;
			this.Email = data.email;
			this.ReposCount = data.public_repos;

			this.trigger('userLoaded');

			/*$('#userName').html(data.login);
			$('#userAvatar').attr("src", data.avatar_url);
			$('#userEmail').html(data.email);
			$('#reposCount').html(data.public_repos);*/
		});
	},
});