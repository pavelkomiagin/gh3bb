var CommitView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		$('#commitInfoBlock').html("<h2>Commit '" + this.model.get("Message") + "' in repository '" + AppData.currentRepoName + "'</h2>");

		var files = this.model.get("Files");
				
		for(var i = 0; i < files.length; i++) {
			var txt = this.escapeSymbols(files[i].patch);
			var diffTable = this.biuldDiffTable(files[i].filename, txt);
			$('#commitInfoBlock').append(diffTable);
		}
	},

	escapeSymbols: function(text) {
		var entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};

		return String(text).replace(/[&<>"'\/]/g, function (s) {
	    	return entityMap[s];
	    });
	},

	biuldDiffTable: function(caption, text) {
		var res = "<div style='border: 1px solid #ccc; max-width: 980px; overflow-x: scroll;'><table width='100%'><tr><th align='left' style='border-bottom: 1px solid #ccc; padding: 5px 0 5px 20px; background-color: #EAEAEA;'>" + caption + "</th></tr>";
		var parts = text.split("\n");

		for(var i = 0; i < parts.length-1; i++) {
			var trClass = "";
			var tdClass = "";
			if(parts[i].charAt(0) == "+") {
				trClass = 'gi';
				tdClass = 'diff-line-code';
			}
			
			if(parts[i].charAt(0) == "-") {
				trClass = 'gd';
				tdClass = 'diff-line-code';
			}

			res += "<tr class='" + trClass + "'><td class='" + tdClass + "'><pre>" + parts[i] + "</pre></td></tr>";
		}

		res += "</table></div><br><br>";

		return res;
	}
});