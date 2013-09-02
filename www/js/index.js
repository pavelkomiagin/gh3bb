jQuery(document).ready(function($){
	getJSONApiResult({service: "users/Aristokrat/repos"}, function(data) {
		console.log(data);
	});
});