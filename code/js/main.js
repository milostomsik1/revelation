$(document).ready(function() {
	$('.match-footer-box-height').matchHeight();

	$('a#mobile-nav').on("click", function() {
		$("ul#mobile-menu").toggleClass("expand");
	});
});
