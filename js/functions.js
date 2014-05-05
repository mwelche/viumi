$(document).ready(function() {
	$('.annotate').viumi();
});
(function($){
	$.fn.extend({
		viumi: function(options) {
			this.defaultOptions = {};

			var settings = $.extend({}, this.defaultOptions, options);
			return this.each(function(i) {
				var that = this,
					$this = $(this);
				var inViewportCheck = function(el) {
					var rect = el.getBoundingClientRect();
					return (
						rect.top >= 0 &&
						rect.left >= 0 &&
						rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) && /*or $(window).height() */
						rect.right <= (window.innerWidth || document. documentElement.clientWidth) /*or $(window).width() */
					);
				};
				this.inViewport = function() {
					var index = $this.html(),
						idIndex = '#'+index;

					if (inViewportCheck(that) ) {
						if (!$(idIndex).is(":visible")) {
							// THe element is in view, now animate variable idIndex.
							$(idIndex).css('transform','scale(.8)').fadeIn(300).css('transform','scale(1)');
						}
					} else {
						if ($(idIndex).is(":visible")) {
							// 'No longer Visible' code goes here
							$(idIndex).fadeOut(300);
						}
					}
				};
				$(window).on('load resize scroll', this.inViewport);
			});
		}
	});
})(jQuery);
