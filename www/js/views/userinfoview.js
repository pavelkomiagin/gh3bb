var UserInfoView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		var user = this.model;

		$('#userName').html(user.get('Name'));
		$('#userAvatar').attr("src", user.get('AvatarUrl'));
		$('#userEmail').html(user.get('Email'));
		$('#reposCount').html(user.get('ReposCount'));
	}
});