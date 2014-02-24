$(document).ready(function() {
 $('#SearchButton').click(function() {
 
 var Box = $('#SearchBox').val();
	window.open("https://www.facebook.com/search/more/?q=" + Box);
	});

});