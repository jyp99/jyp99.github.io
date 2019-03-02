$(function(){
  $('.layer_pop_wrap a,.layer_pop_wrap button').click(function(e){
		e.preventDefault();
		$('.layer_pop_wrap').removeClass('is_show');
  });
  $('.top_banner_wrap .btn_close').click(function(e){
		e.preventDefault();
		$('body').toggleClass('is_topbanner_close');
  });
  $('.btn_gnb').click(function(e){
		e.preventDefault();
		$('body').addClass('is_gnb_show');
  });
  $('.gnb .btn_close').click(function(e){
		e.preventDefault();
		$('body').removeClass('is_gnb_show');
  });
  $('.btn_company_info').click(function(e){
		$(this).parents('.company_info_wrap').toggleClass('is_open');
		$(this).find('.ico_arr').toggle();
  });
});