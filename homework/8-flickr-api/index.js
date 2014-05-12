$(document).ready(function() {

	$('#SearchButton').click(function() {

		$("#picture").html("");

		var Search = $('#box').val();

		var flickrApiUrl = "https://api.flickr.com/services/rest/" +
			"?method=flickr.photos.search" +
			"&api_key=1c9f777eb7446f34a7261dc1a54be4b2" +
			"&tags=" + Search +
			"&has_geo=1" +
			"&extras=geo" +
			"&format=json" +
			"&jsoncallback=?";

		$.getJSON(flickrApiUrl, processPictures);

	});

	function processPictures(data) {
		console.log("1");
			var firstPhoto = data.photos.photo[0];
        var FarmId = firstPhoto.farm;
        var ServerId = firstPhoto.server;
        var PhotoId = firstPhoto.id;
        var SecretId = firstPhoto.secret;
        
        
        
	
		// 
		var imageUrl = "http://farm" + FarmId + ".staticflickr.com/" + ServerId + "/" + PhotoId + "_" + SecretId + ".jpg";
		var imageHtmlElement = "<img src='" + imageUrl + "' />";

		$("#picture").append(imageHtmlElement);
	}
});