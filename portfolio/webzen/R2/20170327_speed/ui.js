var navTop = $('.e-nav').offset().top;

function navFix() {
	($(window).scrollTop() > navTop) ? $('.e-nav').addClass('is-fixed') : $('.e-nav').removeClass('is-fixed');
}

function openPop() {
	$('._popup').on('click', function (e) {
		e.preventDefault();
		var $pop = $($(this).data('popup'));
		if ( $('.dimmed:visible') ) { $('.dimmed').hide(); }
		$pop.show().siblings('.dimmed').show();
	});
	$('.ly-pop .btn-clse, .ly-pop .btn-cfm').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.ly-pop').hide().siblings('.dimmed').hide();
	});
}

function innerTab() {
	var $tabBtn = $('.e-tab .e-tab-btn');
	$('.e-tab').on('click', '.e-tab-btn', function (e) {
		e.preventDefault();
		var idx = $tabBtn.index( $(this) );
		$(this).addClass('selected').parent().siblings().find('.e-tab-btn').removeClass('selected');
		$('.e-tab-wrap:eq(' + idx + ')').show().siblings('.e-tab-wrap').hide();
	})
}

navFix();
openPop();
innerTab();

$(window).on('scroll', function () {
	navFix();
});
