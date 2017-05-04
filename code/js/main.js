$(document).ready(function() {
	$('.match-footer-box-height').matchHeight();
});

$(document).ready(function() {
	$('a#mobile-nav').on("click", function() {
		$("ul#mobile-menu").toggleClass("expand");
	});
});
