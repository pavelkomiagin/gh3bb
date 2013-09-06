var Repository = Backbone.Model.extend({
	initialize: function() {
		/*var This = this;
		if(this.get("NeedLoadData")) {
			getJSONApiResult({service: "repos/" + AppData.currentUserNick + "/lineq"}, function(data) {
				This.trigger("change");
			});
		}*/
	}
});

var Repositories = Backbone.Collection.extend({
	model: Repository,

	initialize: function(params) {
		this.url = "https://api.github.com/users/" + params.nick + "/repos";
	}
});

