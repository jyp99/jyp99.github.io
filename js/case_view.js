$(function(){
	$('.profile_wrap .btn_profile_toggle').click(function(e){
		e.preventDefault();
		$('.wrap').toggleClass('is_folding');
	});
});