if (navigator.userAgent.match(/Trident\/7\./)) {
	if (navigator.userAgent.match(/MSIE 8.0/) || navigator.userAgent.match(/MSIE 7.0/)) {
	} else {
		$('body').on('mousewheel', function (e) {
			e.preventDefault();
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});
	}
}

var headerTop = $('.e-header').offset().top;
var $localNav = $('.e-lnb');
var scrollArr = new Array();
$('[id^=update]').each(function(){
	scrollArr.push( $(this).offset().top );
});
var $sec = $('.e-sec');

function headerFix() {
	($(window).scrollTop() > headerTop) ? $('.e-header').addClass('is-fixed') : $('.e-header').removeClass('is-fixed');
}

function localNav() {
	var nowTop = $(window).scrollTop();
	if ( $('.tab1').length == 1 ) {
		for (var i = 0, total = scrollArr.length; i < total; i++) {
			var minValue = scrollArr[i];
			var maxValue = scrollArr[i + 1] ? scrollArr[i + 1] : nowTop + 1;
			if (nowTop >= minValue && nowTop < maxValue){
				$('.lnb-item:eq(' + i + ')').addClass('on').siblings().removeClass('on');
			}
		}
		if ( nowTop < scrollArr[0] ) {
			$('.lnb-item').removeClass('on');
		}

		$localNav.on('click', '.lnb-item', function (e) {
			e.preventDefault();
			$('html,body').stop().animate({ 'scrollTop': $( $(this).attr('href') ).offset().top }, 300);
		});
	}
}

$(document).ready(function () {
	ui.checkbox();
	headerFix();
	localNav();
	$('.logo').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({ 'scrollTop': 0 }, 300);
	});
	$('.next-cont').on('click', function (e) {
		e.preventDefault()
		var idx = $sec.index($(this).parent());
		$('html,body').animate({ 'scrollTop': scrollArr[idx] }, 300);
	});
});

$(window).on('scroll resize', function () {
	headerFix();
	localNav();
});
