$(function(){
	$('.lst_tab .tab_item').click(function(e){
		e.preventDefault();
		$(this).parents('.lst_tab').find('.tab_item').removeClass('is_active');
		$(this).addClass('is_active');
		$('.tab_cont').hide();
		var tabname = $(this).find('.tab_link').attr('href').split('#')[1];
		document.getElementById(tabname).style.display = 'block';
	});
	$('.btn_menu_select').click(function(e){
		e.preventDefault();
		$(this).parents('.menu_select_wrap').children('.menu_area').removeClass('has_menu_open');
		$(this).parents('.menu_area').toggleClass('has_menu_open');
	});
	$('.btn_menu').click(function(e){
		e.preventDefault();
		$(this).parents('.sub_item').siblings('.sub_item').children('.btn_menu').removeClass('is_selected');
		$(this).toggleClass('is_selected');
		$(this).parents('.menu_area').removeClass('has_menu_open');
	});

	$('.lst_lnb .lnb_link').click(function(e){
		$(this).parents('.lst_lnb').children('.lnb_item').removeClass('is_selected');
		$(this).parents('.lnb_item').addClass('is_selected');
	});

	$('.lst_lnb .lnb_link').click(function(e){
		$(this).parents('.lnb_item').siblings('.lnb_item').removeClass('is_selected');
		$(this).parents('.lnb_item').siblings('.lnb_item').children('.depth2_wrap').removeClass('is_show');
		$(this).siblings('.depth2_wrap').addClass('is_show');
	});

	$('.depth2 .btn_menu_open').click(function(e){
		$(this).parents('.depth2').children('.depth2_item').removeClass('is_selected');
		$(this).parents('.depth2').siblings('.depth2_item').removeClass('is_selected');
		$(this).parents('.depth2').find('.depth3').removeClass('is_show');
		$(this).siblings('.depth3').addClass('is_show');//PC제어
		$(this).parents('.depth2_item').toggleClass('is_selected');
	});

	$('.depth2_wrap .btn_close').click(function(e){
		$(this).parents('.depth2_wrap').removeClass('is_show');
	});

	$('.lst_lnb .depth3_link').mouseleave(function(e){
		$(this).removeClass('is_show');
	});

	$('.btn_total_menu').click(function(e){
		e.preventDefault();
		$('.layer_total_menu').toggleClass('is_show');
		$('#content').toggle();
	});

	$('.gnb.is_pc_show .menu_link').mouseover(function(e){
		var $hasSubMenu = $(this).next().is('.sub_menu_wrap');
		if($hasSubMenu){
			$('header').addClass('has_gnb_show');
			$('.sub_menu_wrap').hide();
			$(this).siblings('.sub_menu_wrap').show();
		}else{
			$('header').removeClass('has_gnb_show');
			$('.sub_menu_wrap').hide();
		}
	});

	$('header').mouseleave(function(e){
		e.preventDefault();
		$('header').removeClass('has_gnb_show');
		$('.sub_menu_wrap').hide();
	});

	$('.btn_menu_layer').click(function(e){
		e.preventDefault();
		$('body').addClass('layer_aside_show');
	});
	
	$('.layer_aside_menu .btn_close').click(function(e){
		e.preventDefault();
		$('body').removeClass('layer_aside_show');
	});
	
	$('.layer_aside_menu .menu_link').click(function(e){
		e.preventDefault();
		var $clickBtn = $(this).parent('.menu_item');
		if($clickBtn.hasClass('is_open')){
			$($clickBtn).removeClass('is_open');
			$(this).siblings('.lst_depth2,.lst_depth3').slideUp();
		}else{
			$($clickBtn).addClass('is_open');
			$(this).siblings('.lst_depth2,.lst_depth3').slideDown();
		}
	});
	$('.lst_season .btn_season').click(function(e){
		e.preventDefault();
		$(this).parents('.lst_season').find('.season_item').removeClass('is_selected');
		$(this).parents('.season_item').addClass('is_selected');
	});
	

});