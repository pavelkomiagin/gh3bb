var UserInfoView = Backbone.View.extend({
	initialize: function() {
		this.el = $("#userInfoBlock");
    	this.template = $("#userInfoTpl").html();
    	this.model.set("joined", new Date(this.model.get("created_at")).toDateString());
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		$(this.el).html(Mustache.render(this.template, this.model.toJSON()));
	}
});