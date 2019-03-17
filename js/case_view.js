$(function(){
	$('.profile_wrap .btn_profile_toggle').click(function(e){
		e.preventDefault();
		$('.wrap').toggleClass('is_folding');
	});

	$('.portfolio_img_wrap .btn_img_view').click(function(e){
		$(this).parents('.portfolio_img_wrap').toggleClass('is_active');
	});
});