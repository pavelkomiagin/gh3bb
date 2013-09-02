function getJSONApiResult(apiParams, callback) {
	var url = "https://api.github.com/" + apiParams.service;
	$.getJSON(url, function(data) {
		if(callback != undefined)
			callback(data);
	});
};

