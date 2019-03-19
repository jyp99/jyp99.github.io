var $localNav = $('.e-lnb'),
	localNavTop = $localNav.position().top;
var scrollArr = new Array();
$('[id^=update]').each(function(){
	scrollArr.push( $(this).offset().top );
});

function localNav() {
	if ( $('#e_intro:visible').length ) {
		var nowTop = $(window).scrollTop();
		for (var i = 0, total = scrollArr.length; i < total; i++) {
			var minValue = scrollArr[i];
			var maxValue = scrollArr[i + 1] ? scrollArr[i + 1] : nowTop + 1;
			if (nowTop >= minValue && nowTop < maxValue){
				$('.lnb-item:eq(' + i + ')').addClass('on').siblings().removeClass('on');
			}
		}
		$localNav.css('top', nowTop + localNavTop);
		$(window).width() <= 1536 ? $localNav.addClass('align-right') : $localNav.removeClass('align-right');
	}
}

$(document).ready(function () {
	localNav();
	$('.e-nav').on('click', '.nav-item', function (e) {
		e.preventDefault();
		$(this).addClass('selected').siblings().removeClass('selected');
		$( $(this).attr('href') ).show().siblings('.e-tab').hide();
		$('.e-container').removeClass().addClass('e-container tab' + ($(this).index() + 1) );
		localNav();
	});
	$localNav.on('click', '.lnb-item', function (e) {
		e.preventDefault();
		$('html,body').stop().animate({ 'scrollTop': $( $(this).attr('href') ).offset().top }, 300);
	});
});

$(window).on('scroll resize', function () {
	localNav();
});