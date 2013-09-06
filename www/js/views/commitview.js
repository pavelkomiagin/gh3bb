var CommitView = Backbone.View.extend({
	initialize: function() {
		this.el = $("#commitInfoBlock");
    	this.template = $("#commitInfoTpl").html();
    	this.listenTo(this.model, "change", this.render);
	},

	render: function(params) {
		var commitJSON = this.model.toJSON();
		var formattedFiles = this.getFormattedFiles(commitJSON.files);
		$(this.el).html(Mustache.render(this.template, { files: formattedFiles, repoName: params.repoName, commitMessage: commitJSON.commit.message }));
	},

	getFormattedFiles: function(files) {
		var formattedFiles = [];
		for(var i = 0; i < files.length; i++) {
			var rows = [];
			var txt = files[i].patch;
			var parts = txt.split("\n");
			var res = "";

			for(var j = 0; j < parts.length - 1; j++) {
				var trClass = "";
				var tdClass = "";
				if(parts[j].charAt(0) == "+") {
					trClass = 'gi';
					tdClass = 'diff-line-code';
				}
				
				if(parts[j].charAt(0) == "-") {
					trClass = 'gd';
					tdClass = 'diff-line-code';
				}
				rows.push({ trClass: trClass, tdClass: tdClass, text: parts[j] });
			}
			formattedFiles.push({ caption: files[i].filename, rows: rows });
		}
		return formattedFiles;
	}
});