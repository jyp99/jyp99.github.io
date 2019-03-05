$(function(){
	//브라우저 노티 닫기
	$('.btn_close_noti').click(function(e){
		$('.noti_browser').hide();
	});

	//헤더 스크롤시 고정
	var stickyOffset = $('header').offset().top;

	// 움직이는 snb
	var ScrollPostionDefault = 0;
	var document_size = $(document).height();
	var notiBrowserbHeight = $('.noti_browser').height();
	var snbHeight = $('.snb_inner').height();
	var footerHeight = $('footer').height();

	$(window).scroll(function(){
		//헤더 스크롤시 고정
		var sticky = $('body.is_pc header'),
		scroll = $(window).scrollTop();
		if (scroll >= stickyOffset) sticky.addClass('is_fixed');
		else sticky.removeClass('is_fixed');

		// 움직이는 snb
		var scrollEventPoint = document_size - scroll - footerHeight - snbHeight + notiBrowserbHeight;
		var scrollTopPositoin = $(this).scrollTop();
		var documentScrollLeft = $(document).scrollLeft();

		if (scrollTopPositoin > ScrollPostionDefault) {
			if (scrollEventPoint < snbHeight){
				$('.snb_wrap.is_fixed').removeClass('is_fixed').addClass('is_not_moving');
			}
		} else {
			if (scrollEventPoint > snbHeight){
				$('.snb_wrap.is_not_moving').removeClass('is_not_moving').addClass('is_fixed');
			}
		}
		ScrollPostionDefault = scrollTopPositoin;

		//SNB 가로 스크롤시 위치 고정
		var $snbCheck = $('.container').hasClass('has_snb_container');
		var ScrollLeftPosition = $(document).scrollLeft();
		if($snbCheck){
			var snb_position_left = '-'+ScrollLeftPosition+'px';
			$('.snb_wrap.is_fixed .snb_inner').css('left',snb_position_left);
		};
	});

	//헤더 페이지별 분기처리	
	//헤더 고정 페이지 분기(배경 흰색, 상단 고정)
	var $wrapCheck = $('.wrap').hasClass('header_fixed_wrap');
	if($wrapCheck){
		$('header').addClass('is_hover');
	};

	//마이페이지 헤더노출 방식 예외처리(배경 흰색, 상단 고정)
	var $mypageCheck = $('.content').hasClass('mypage_content');
	if($mypageCheck){
		$('.wrap').addClass('header_fixed_wrap');
		$('header').addClass('is_hover');
	};
	
	//헤더 마우스 오버
	$('header').mouseenter(function(e){
		var $deviceCheck = $('body').hasClass('is_pc');
		if ($deviceCheck) {
			$(this).addClass('is_hover');
		}else{
			return;
		}
	});
	$('header').mouseleave(function(e){
		var $deviceCheck = $('body').hasClass('is_pc');
		if ($deviceCheck) {
			if($wrapCheck||$mypageCheck) return;
			$(this).removeClass('is_hover');
		}else{
			return;
		}
	});

	//헤더 서브메뉴
	$('.lst_gnb .link_menu').mouseleave(function(e){
		var $deviceCheck = $('body').hasClass('is_pc');
		if ($deviceCheck) {
			var $hasSubMenu = $(this).next().is('.drop_menu_wrap');
			if($hasSubMenu) return;
			$('.lst_gnb .link_menu').removeClass('is_hover');
		}else{
			return;
		}
	});

	$('.lst_gnb .link_menu').mouseover(function(e){
		var $deviceCheck = $('body').hasClass('is_pc');
		if ($deviceCheck) {
			$('.lst_gnb .link_menu').removeClass('is_hover');
			$(this).addClass('is_hover');
		}else{
			return;
		}
	});

	$('.drop_menu_wrap').mouseleave(function(e){
		var $deviceCheck = $('body').hasClass('is_pc');
		if ($deviceCheck) {
			$('.lst_gnb .link_menu').removeClass('is_hover');
		}else{
			return;
		}
	});

	$('.lst_gnb .link_menu').mouseenter(function(e){
		var $deviceCheck = $('body').hasClass('is_pc');
		if ($deviceCheck) {
			$(this).addClass('is_hover');
		}else{
			return;
		}
	});

	//회원정보 버튼
	$('.btn_member_setting').mouseover(function(e){
		$(this).next('.lst_member_setting').addClass('is_show');
	});
	$('.lst_member_setting').mouseleave(function(e){
		$('.lst_member_setting').removeClass('is_show');
	});
	$('.member_setting_area').mouseleave(function(e){
		$('.lst_member_setting').removeClass('is_show');
	});

	//언어선택 버튼
	$('.btn_select_lang').mouseover(function(e){
		$(this).parents('.lang_select_area').find('.lst_lang').addClass('is_show');
	});
	$('.lang_select_area .lst_lang').mouseleave(function(e){
		$('.lang_select_area').find('.lst_lang').removeClass('is_show');
	});
	$('.lang_select_area').mouseleave(function(e){
		$('.lang_select_area').find('.lst_lang').removeClass('is_show');
	});

	//통합검색 인풋
	$('.search_word_area .btn_search').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		var $clickSearchWordArea = $(this).parents('.search_word_area');
		var $searchStateCheck = $('.search_word_area').hasClass('is_active');
		if($searchStateCheck){
			$('.search_word_area').removeClass('is_active');
		}else{
			$($clickSearchWordArea).addClass('is_active');
			setTimeout(function() {
				$($clickSearchWordArea).find('.inp_search').focus();
			}, 1500);
		}
	});
	//통합검색 인풋_값있을때만 X버튼 노출
	function checkInputHasValue(element){
		var thisValueLength = $('.search_word_area .inp_search').val().length;
		if( thisValueLength >= 1){
			$('.search_word_area .btn_search_reset').css('display','block');
		}else{
			thisValueLength = 0;
			$('.search_word_area .btn_search_reset').css('display','none');
		}
	}
	//통합검색 인풋_X버튼 클릭시
	$('.search_word_area .btn_search_reset').click(function(e){
		var thisValueLength = $('.search_word_area .inp_search').val().length;
		thisValueLength = 0;
		$('.btn_search_reset').css('display','none');
	});
	

	$('.search_word_area .inp_search').on('change keyup', function() {
		checkInputHasValue(this);
	});
	//통합검색 인풋_다른곳 클릭시
	$('.content').click(function(e) {
		if($('.search_word_area .inp_search').val()){
			return;
		}
		$('.search_word_area').removeClass('is_active');
	});
	
	//패밀리사이트 버튼
	$('.btn_family_site').click(function(e){
		$('.family_site_wrap').toggleClass('is_active');
	});

	//예상 요금 내역 보기 버튼
	$('.btn_history').click(function(e){
		$('.calculator_content').toggleClass('estimated_wrap_show');
		$('body').toggleClass('is_show_modal');
		
	});

	//개인정보 이용 내역_토글 버튼
	$('.personal_info_wrap .btn_detail_toggle').click(function(e){
		$(this).parents('.term_item').toggleClass('is_show');
	});

	//서비스 LNB
	$('.snb .link_service,.snb .link_category').click(function(e){
		var $hasCategoryMenu = $(this).parents('.service_snb_wrap .item_menu');
		var $thisMenu = $(this).parents('.sub_menu_item');
		$('.snb').find('.item_menu, .sub_menu_item').removeClass('is_active');
		$($thisMenu).addClass('is_active');
		$($hasCategoryMenu).addClass('is_active');
	});

	//모달 중첩 노출
	$('.modal .btn_close').click(function(e){
		var showModalCheck = $('body').find('.modal:visible').length;
		showModalCheck--;
		if(showModalCheck >= 1){
			$('body').addClass('is_show_modal');
		}else{
			$('body').removeClass('is_show_modal');
		}
	});

	//크레딧 테이블
	$('.tbl_credit .btn_history_toggle').click(function(e){
			e.preventDefault();
		 $(this).parents('tbody').toggleClass('is_detail_show');
	});

	//모바일 GNB 버튼	
	$('#toast_header .btn_gnb').click(function(e){
		$('body').toggleClass('is_show_mgnb');
	});
	$('#toast_header .btn_gnb_close').click(function(e){
		$('body').removeClass('is_show_mgnb');
	});

	/* 모바일 GNB 액션 */
	$('body.is_m #toast_header .gnb .lst_gnb .menu_txt[data-toggle="collapse"]').click(function(e){
		e.preventDefault();
	});

	//모바일 테이블 화살표 표시
	$('.tbl_wrap').on('scroll',function(e) {
		var scl = $(this).scrollLeft();
		if(scl>=1){
			$(this).removeClass('is_arrow_show');
		}else{
			$(this).addClass('is_arrow_show');
		}
	});

	//슬라이드 터치 이벤트
	$(".carousel").on("touchstart", function(event){
		var xClick = event.originalEvent.touches[0].pageX;
		$(this).one("touchmove", function(event){
			var xMove = event.originalEvent.touches[0].pageX;
			if( Math.floor(xClick - xMove) > 5 ){
				$(this).carousel('next');
			}
			else if( Math.floor(xClick - xMove) < -5 ){
				$(this).carousel('prev');
			}
		});
		$(".carousel").on("touchend", function(){
			$(this).off("touchmove");
		});
	});

	//서비스상세_지역요금 탭
	$('.region_tab .nav-link').click(function(e){
		$(this).parents('.nav-item').addClass('is_active');
		$(this).parents('.nav-item').siblings().removeClass('is_active');
	});

	//모바일 SNB 스와이프 
	function snbAction(){
		var ScollContentsWrapWidth = $(document).width()-16;
		var snbTypeCheck = $('.snb_wrap').hasClass('is_fixed');
		var sum = 0;
		var itemGap = 16 ;

		if(snbTypeCheck){
			var scl = $('.snb_scroll_wrap .inner').scrollLeft();
			var sclWidth = $('.snb_scroll_wrap .inner').get(0).scrollWidth;
			var scrollRightCheck = sclWidth-scl-ScollContentsWrapWidth;
			var activeTarget = $('.snb_wrap');
			$(activeTarget).find('.snb_scroll_wrap .item_menu').each( function(){ sum += $(this).width();sum += itemGap; });
		}else{
			var scl = $('.snb_wrap .item_menu.active').find('.snb_scroll_wrap .inner').scrollLeft();
			var sclWidth = $('.snb_wrap .item_menu.active').find('.snb_scroll_wrap .inner').get(0).scrollWidth;
			var scrollRightCheck = sclWidth-scl-ScollContentsWrapWidth;
			var activeTarget = $('.snb_wrap').find('.item_menu.active');
			$(activeTarget).find('.snb_scroll_wrap .sub_menu_item').each( function(){ sum += $(this).width();sum += itemGap; });
		}

		//왼쪽 스크롤 그림자
		if(scl>=1){
			$(activeTarget).find('.snb_scroll_wrap').addClass('is_scroll_left');
		}else{
			$(activeTarget).find('.snb_scroll_wrap').removeClass('is_scroll_left');
		}

		//오른쪽 스크롤 그림자
		if(sum>=ScollContentsWrapWidth){
			$(activeTarget).find('.snb_scroll_wrap').addClass('is_scroll_right');
		}
		if(scrollRightCheck === -16){
			$(activeTarget).find('.snb_scroll_wrap').removeClass('is_scroll_right');
		}

	}

	$('.snb_scroll_wrap .inner').on('scroll',function(e) {
		snbAction();
		
	});

	$('.snb_wrap .carousel-control-next,.snb_wrap .carousel-control-prev').click(function(e){
		setTimeout(snbAction, 700);
	});
	
	$("#service_snb_carousel").carousel({interval: false});

	//모바일 메인 고객사례 스와이프 
	function mainCustomerSwipe(){
		var ScollContentsWrapWidth = $(document).width()-16;
		var sum = 0;
		var itemGap = 16 ;
		var scl = $('.customer_sec .nav_scroll_wrap .inner').scrollLeft();
		var sclWidth = $('.customer_sec .nav_scroll_wrap .inner').get(0).scrollWidth;
		var scrollRightCheck = sclWidth-scl-ScollContentsWrapWidth;
		var activeTarget = $('.customer_sec');
		$(activeTarget).find('.nav_scroll_wrap .nav-item').each( function(){ sum += $(this).width();sum += itemGap; });

		//왼쪽 스크롤 그림자
		if(scl>=1){
			$(activeTarget).find('.nav_scroll_wrap').addClass('is_scroll_left');
		}else{
			$(activeTarget).find('.nav_scroll_wrap').removeClass('is_scroll_left');
		}

		//오른쪽 스크롤 그림자
		if(sum>=ScollContentsWrapWidth){
			$(activeTarget).find('.nav_scroll_wrap').addClass('is_scroll_right');
		}
		if(scrollRightCheck === -16){
			$(activeTarget).find('.nav_scroll_wrap').removeClass('is_scroll_right');
		}
	}

	var targetContent = document.getElementById('content');
	if(targetContent.nodeName === 'MAIN') mainCustomerSwipe();

	$('main .customer_sec .nav_scroll_wrap .inner').on('scroll',function(e) {
		mainCustomerSwipe();
	});


});


$(document).ready(function() {

	function checkWidth() {
		var $window = $(window);
		var windowsize = $window.width();
		if (windowsize >= 768) {
			//PC 즉시실행함수
			$('body').removeClass('is_m');
			$('body').addClass('is_pc');
		}else{
			//모바일 즉시실행함수
			$('body').removeClass('is_pc');
			$('body').addClass('is_m');
		}
	}
	checkWidth();
	$(window).resize(checkWidth);

});