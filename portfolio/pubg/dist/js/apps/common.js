function popupFunc (btn, layerPop) {
	var popupWrap = $(layerPop),
			popupBtn = $(btn),
			popup = popupWrap.find('.ly_pop'),
			popupCloseBtn = popupWrap.find('.btn_close_layer');
	popupBtn.on('click', function() {
		event.preventDefault();
		$('body').addClass('has_layer_show');
		popupWrap.addClass('is_show');
	});
	popupCloseBtn.on('click', function () {
		$('body').removeClass('has_layer_show');
		popupWrap.removeClass('is_show');
	});
	popupWrap.on('click', function (e) {
		if (!popup.is(e.target) && !popup.has(e.target).length){
			$('body').removeClass('has_layer_show');
			popupWrap.removeClass('is_show');
		}
	});
}

;(function (win, $) {
		'use strict';


    $(function () {
			//헤더 스크롤시 고정
			var stickyOffset = $('header').offset().top;
			$(window).scroll(function(){
				var sticky = $('header'),
				scroll = $(window).scrollTop();
				if (scroll > stickyOffset){
				 sticky.addClass('is_fixed');
				}
				else{
					sticky.removeClass('is_fixed');
				}
			});

			var screen_mobile = 768;
			//헤더 마우스 오버
			$('header .link_menu').mouseenter(function(e){
				var browserwidth = $(window).width();
				var $hasSubMenu = $(this).next().is('.drop_menu_wrap');
				if(browserwidth>=screen_mobile){
					$('header .link_menu').removeClass('is_hover');
					$(this).addClass('is_hover');
					if(!$hasSubMenu) {
						$('header').removeClass('is_dropmenu_show');
						return;
					};
					$('header').addClass('is_dropmenu_show');
				}

			});
			$('header .menu_item').mouseleave(function(e){
				//if($wrapCheck) return;
			});

			//GNB 드롭 메뉴
			$('header .drop_menu_wrap').mouseleave(function(e){
				$('header').removeClass('is_dropmenu_show');
				$('header .link_menu').removeClass('is_hover');
			});

			//모바일 햄버거메뉴
			$('.btn_gnb').click(function(e){
				$('body').css('overflow','hidden');
				$('.gnb_wrap').addClass('is_show');
			});

			$('.btn_gnb_close').click(function(e){
				$('body').css('overflow','');
				$('.gnb_wrap').removeClass('is_show');
			});

			$('.gnb_wrap').on('click', (function(e){
				var gnb = $(this).find('.inner');
				if (!gnb.is(e.target) && !gnb.has(e.target).length){
					$('body').css('overflow','');
					$(this).removeClass('is_show');
				}
			}));

			$('.link_menu').click(function(e){
				var $hasSubMenu = $(this).next().is('.drop_menu_wrap');
				if($hasSubMenu){
					e.preventDefault();
					$(this).parents('.menu_item').toggleClass('is_open');
				}
			});

			//탭
			$('.tab_weekly .btn_tab,.lst_round_tab .btn_tab').click(function(e){
				e.preventDefault();
				var selectTabState = $(this).parents('.tab_item').hasClass('is_selected');
				var targetSectionId = $(this).attr('href').split('#')[1];
				var $targetSection = document.getElementById(targetSectionId);
				if(!selectTabState){
					$(this).parents('.tab_item').addClass('is_selected').siblings('.tab_item').removeClass('is_selected');
					$($targetSection).show().siblings('.tab_section').hide();
				}
			});

			//라디오 버튼
			$('.tag').click(function(e){
				$(this).parents('.lst_tag').find('.tag').removeClass('is_selected');
				$(this).addClass('is_selected');
			});

			//셀렉트박스
			$('.select_wrap .btn_option_toggle').click(function(e){
				$(this).parents('.select_wrap').find('.select_area').removeClass('is_selected');
				$(this).parents('.select_area').addClass('is_selected');
			});
			$('.select_wrap').mouseleave(function(e) {
				$('.select_area').removeClass('is_selected');
			});

			//팝업
			$('.lst_vod .link_post').click(function(e){
				e.preventDefault();
				$('body').addClass('has_layer_show');
				$('.layer_vod').addClass('is_show');
			});

			//주간랭킹 토글
			$('.lst_ranking_simple .btn_area').click(function(e){
				e.preventDefault();
				$(this).parents('.lst_ranking_simple').find('.ranking_item').removeClass('is_open');
				$(this).parents('.ranking_item').addClass('is_open');
			});

			 $('.btn_close_layer').click(function(e){
			 	$('body').removeClass('has_layer_show');
			 	$('.layer_pop_wrap').removeClass('is_show');
			 });


			//팀상세 주간랭킹 토글2
			$('.lst_weekly_ranking .btn_area.is_pc_show .btn_detail_toggle,.lst_weekly_ranking .btn_detail_layer').click(function(e){
				e.preventDefault();
				var selectItemState = $(this).parents('.ranking_item').hasClass('is_open');
				if(!selectItemState){
					$(this).parents('.lst_weekly_ranking').find('.ranking_item').removeClass('is_open');
					$(this).parents('.ranking_item').addClass('is_open');
				}else{
					$(this).parents('.ranking_item').removeClass('is_open');
				}

			});

			//이동정보 툴팁
			$('.tbl_round_ranking .btn_info').click(function(e){
				e.stopPropagation();
				var $openTooltipState = $(this).parents('.info_area').hasClass('is_tooltip_show');
				if($openTooltipState){
					$(this).parents('.info_area').removeClass('is_tooltip_show');
				}else{
					$('.info_area').removeClass('is_tooltip_show');
					$(this).parents('.info_area').addClass('is_tooltip_show');
				}
			});


			//이동정보 툴팁_다른곳 클릭시
			$('body').click(function(e) { 
				var $openTooltipState = $('.info_area').hasClass('is_tooltip_show');
				if($openTooltipState) $('.info_area').removeClass('is_tooltip_show');
			});

			//일정 생방송 채널 툴팁
			$('.onair_channel_area .btn_onair').click(function(e){
				e.stopPropagation();
				console.log('클릭');
				var DeviceWidthCheck = $(document).width();
				if(768>=DeviceWidthCheck){
					$('.layer_onair').addClass('is_show');
					$('body').addClass('has_layer_show');
				}else{
					$('.onair_channel_area').removeClass('is_tooltip_show');
					$(this).parents('.onair_channel_area').addClass('is_tooltip_show');
				}
			});

			//일정 생방송 채널 툴팁_다른곳 클릭시
			$('body').click(function(e) { 
				var $openTooltipState = $('.onair_channel_area').hasClass('is_tooltip_show');
				if($openTooltipState) $('.onair_channel_area').removeClass('is_tooltip_show');
			});

			//캘린더 스와이퍼
			var swiper = new Swiper('.calendar_swiper', {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
    		allowTouchMove:false,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				speed : 0,
			});

			//평균데이터 스와이퍼
			var swiper = new Swiper('.average_data_swiper', {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				allowTouchMove:false,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				speed : 0,
			});

			
			// $('.layer_pop_wrap').click(function(e){
			// 	var popup = $(this).find('.ly_pop');
      //   if (!popup.is(e.target) && !popup.has(e.target).length){
			// 		$('body').removeClass('has_layer_show');
			// 		$(this).removeClass('is_show');
			// 	}
			// });

		});
		
    $(win).on('load', function () {
			popupFunc('.lst_vod .link_post', '.layer_vod');
			popupFunc('.layer_onair .item_channel', '.layer_vod');
			popupFunc('.official_ranking .link_detail_data', '.layer_ranking:eq(0)');
			popupFunc('.ranking_reasult_content .lst_ranking_simple .link_detail', '.layer_ranking:eq(1)');
			popupFunc('.ranking_reasult_content .lst_weekly_ranking .btn_detail', '.layer_ranking:eq(2)');
			popupFunc('.team_intro .lst_weekly_ranking .btn_detail_layer', '.layer_weekly_ranking:eq(0)');
			popupFunc('.player_intro .lst_weekly_ranking .btn_detail_layer', '.layer_weekly_ranking:eq(1)');
			popupFunc('.introduce_content .btn_league_noti', '.layer_league_noti');
			popupFunc('.introduce_content .league_group_wrap .btn_more_s', '.layer_vod');
			popupFunc('.introduce_content .league_group_wrap .btn_view', '.layer_team_list');
		});
})(window, window.jQuery);