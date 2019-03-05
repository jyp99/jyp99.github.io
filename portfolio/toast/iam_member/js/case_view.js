$(".case_view .btn_device_change").click(function() {
	$('body').toggleClass('is_m');
	if($('body').hasClass('is_m')){
		$('.btn_device_change').html('PC 화면 보기');
	}else{
		$('.btn_device_change').html('모바일 화면 보기');
	};
});
$(".case_view .btn_tooltip_toggle").click(function() {
	$('.tooltip').toggleClass('is_show');
});
$(".case_view .btn_state_reset").click(function() {
	$('.login_bx .alert_txt').hide();
	$('.error_control_area').removeClass('is_error');
	$('.tooltip').removeClass('is_show');
});
$(".case_view .btn_error").click(function() {
	$('.login_bx .alert_txt').show();
	$('.error_control_area').addClass('is_error');
});
$(".case_view .btn_toggle_caseview").click(function() {
	$(this).siblings('.btn').toggle();
});