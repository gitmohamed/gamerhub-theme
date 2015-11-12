(function(){
	$(document).on('ready', function(){
		// console.log("LOADED!!!");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			$('.hero').css('background-position-y', (scroll/2)+'px');
			$('.headline-overlay h1').css('opacity', (-1 * (scroll / 150) + 1) );
		});
	});
})();