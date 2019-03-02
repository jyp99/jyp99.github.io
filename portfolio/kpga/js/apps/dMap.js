(function (w, $, d) {
  'use strict';
  var dummy = [
    { holenum: 1, mapY:35.6783, mapX:127.601, TShotY:35.6798, TShotX:127.597, HoleCupY:35.6832, HoleCupX:127.599, CenterY:35.6832, CenterX:127.599 },
    { holenum: 2, mapY:35.6783, mapX:127.601, TShotY:35.6842, TShotX:127.599, HoleCupY:35.6823, HoleCupX:127.601, CenterY:35.6823, CenterX:127.601 },
    { holenum: 3, mapY:35.6783, mapX:127.601, TShotY:35.6821, TShotX:127.602, HoleCupY:35.6818, HoleCupX:127.604, CenterY:35.6818, CenterX:127.604 },
    { holenum: 4, mapY:35.6783, mapX:127.601, TShotY:35.6809, TShotX:127.603, HoleCupY:35.6775, HoleCupX:127.6, CenterY:35.6775, CenterX:127.6 },
    { holenum: 5, mapY:35.6783, mapX:127.601, TShotY:35.6771, TShotX:127.599, HoleCupY:35.6779, HoleCupX:127.598, CenterY:35.6779, CenterX:127.598 },
    { holenum: 6, mapY:35.6783, mapX:127.601, TShotY:35.6776, TShotX:127.598, HoleCupY:35.6755, HoleCupX:127.6, CenterY:35.6755, CenterX:127.6 },
    { holenum: 7, mapY:35.6783, mapX:127.601, TShotY:35.6753, TShotX:127.601, HoleCupY:35.6758, HoleCupX:127.602, CenterY:35.6758, CenterX:127.602 },
    { holenum: 8, mapY:35.6783, mapX:127.601, TShotY:35.6751, TShotX:127.602, HoleCupY:35.6742, HoleCupX:127.599, CenterY:35.6742, CenterX:127.599 },
    { holenum: 9, mapY:35.6783, mapX:127.601, TShotY:35.673, TShotX:127.598, HoleCupY:35.6767, HoleCupX:127.596, CenterY:35.6767, CenterX:127.596 },
    { holenum: 10, mapY:35.6783, mapX:127.601, TShotY:35.6792, TShotX:127.597, HoleCupY:35.6809, HoleCupX:127.601, CenterY:35.6809, CenterX:127.601 },
    { holenum: 11, mapY:35.6783, mapX:127.601, TShotY:35.6803, TShotX:127.601, HoleCupY:35.6789, HoleCupX:127.598, CenterY:35.6789, CenterX:127.598 },
    { holenum: 12, mapY:35.6783, mapX:127.601, TShotY:35.6786, TShotX:127.598, HoleCupY:35.6782, HoleCupX:127.6, CenterY:35.6782, CenterX:127.6 },
    { holenum: 13, mapY:35.6783, mapX:127.601, TShotY:35.6769, TShotX:127.6, HoleCupY:35.6779, HoleCupX:127.603, CenterY:35.6779, CenterX:127.603 },
    { holenum: 14, mapY:35.6783, mapX:127.601, TShotY:35.6783, TShotX:127.605, HoleCupY:35.6782, HoleCupX:127.606, CenterY:35.6782, CenterX:127.606 },
    { holenum: 15, mapY:35.6783, mapX:127.601, TShotY:35.6777, TShotX:127.606, HoleCupY:35.68, HoleCupX:127.609, CenterY:35.68, CenterX:127.609 },
    { holenum: 16, mapY:35.6783, mapX:127.601, TShotY:35.6785, TShotX:127.609, HoleCupY:35.6761, HoleCupX:127.604, CenterY:35.6761, CenterX:127.604 },
    { holenum: 17, mapY:35.6783, mapX:127.601, TShotY:35.6775, TShotX:127.605, HoleCupY:35.6764, HoleCupX:127.601, CenterY:35.6764, CenterX:127.601 },
    { holenum: 18, mapY:35.6783, mapX:127.601, TShotY:35.6746, TShotX:127.6, HoleCupY:35.6774, HoleCupX:127.597, CenterY:35.6774, CenterX:127.597 }
  ];

  var dummy2 = [
  { conventionX : 127.5978361, conventionY : 35.6785102, code:"BU"},
  { conventionX : 127.5991343, conventionY : 35.6778522, code:"SM"},
  { conventionX : 127.6020872, conventionY : 35.6790707, code:"GF"},
  { conventionX : 127.5996946, conventionY : 35.6806743, code:"TO"},
  { conventionX : 127.5989246, conventionY : 35.6764948, code:"BU"}
  ]
  
  var slide = null;
  var customOverlay = null;


  var content = '<div class="overlaybox">' +
'    <div class="layer_marker_info">' +
'    <div class="title_wrap">' +
'      <span class="ico_area">' +
'        <span class="ico_maker ico_fairway"></span>' +
'      </span>' +
'      <div class="txt_area">' +
'        <h3 class="h_layer">11홀 페어웨이</h3>' +
'        <span class="desc_txt">Par 4, 431Yds</span>' +
'      </div>' +
'    </div>' +
'    <div class="layer_loading">' +
'       <span class="ico_area">' +
'         <img src="img/ico_spin.gif" alt="로딩 중">' +
'       </span>' +
'    </div>' +
'    <div class="nav_controll_wrap">' +
'      <div class="scroll_wrap is_btn_control">' +
'        <ul class="lst_group">' +
'        <li class="group">' +
'          <a href="#" class="group_name">19조</a>' +
'        </li>' +
'        <li class="group">' +
'          <a href="#" class="group_name is_selected">20조</a>' +
'        </li>' +
'        <li class="group">' +
'          <a href="#" class="group_name">21조</a>' +
'        </li>' +
'        </ul>' +
'      </div>' +
'      <button class="btn_prev">이전</button>' +
'      <button class="btn_next is_disabled">다음</button>' +
'    </div>' +
'    <div class="layer_content_wrap">' +
'      <table class="tbl_player">' +
'      <caption><span class="blind">조 별 스코어 정보</span></caption>' +
'      <thead>' +
'      <tr>' +
'      <th scope="col">선수</th>' +
'      <th scope="col">Today</th>' +
'      <th scope="col">Total</th>' +
'      <th scope="col">순위</th>' +
'      </tr>' +
'      </thead>' +
'      <tbody>' +
'      <tr>' +
'      <th srope="row" class="name"><a href="#" class="link_player_detail"><span class="player_photo_area"><img src="img/@tmp_player1.jpg" alt="선수 이미지"></span><em class="name_txt">김병준</em></a></th>' +
'      <td class="score_today">E</td>' +
'      <td>-9</td>' +
'      <td>12</td>' +
'      </tr>' +
'      <tr>' +
'      <th srope="row" class="name"><a href="#" class="link_player_detail"><span class="player_photo_area"><img src="img/@tmp_player2.jpg" alt="선수 이미지"></span><em class="name_txt">이승택</em></a></th>' +
'      <td class="score_today is_plus">+1</td>' +
'      <td>-9</td>' +
'      <td>12</td>' +
'      </tr>' +
'      <tr>' +
'      <th srope="row" class="name"><a href="#" class="link_player_detail"><span class="player_photo_area"><img src="img/@tmp_player3.jpg" alt="선수 이미지"></span><em class="name_txt">김태우</em></a></th>' +
'      <td class="score_today is_minus">-1</td>' +
'      <td>-9</td>' +
'      <td>12</td>' +
'      </tr>' +
'      </tbody>' +
'      </table>' +
'    </div>' +
'    <div class="btn_wrap">' +
'      <a href="#" class="btn_group_detail">' +
'        <span class="btn_txt">조 정보 상세보기</span>' +
'      </a>' +
'    </div>' +
'    <button class="btn_layer_close" type="button">레이어 닫기</button>' +
'</div>';


  // 생성자에서 엘리먼트를 생성한다.
  function SimpleTextMarker(position, text) {
    this.position = position;
    this.node = document.createElement('div');
    //this.node.className = 'is_selected';//마커 선택된 화면 확인용
    this.node.style.position = 'absolute';
    this.node.style.whiteSpace = 'nowrap';
    // this.node.appendChild(document.createTextNode(text));
    this.node.insertAdjacentHTML('beforeend', text.trim());
  }

  SimpleTextMarker.prototype = new daum.maps.AbstractOverlay;

  SimpleTextMarker.prototype.onAdd = function() {
    var panel = this.getPanels().overlayLayer;
    panel.appendChild(this.node);
    this.panel = panel;
  };

  SimpleTextMarker.prototype.onRemove = function() {
      this.node.parentNode.removeChild(this.node);
  };

  SimpleTextMarker.prototype.setVisible = function(isVisible) {
    if (isVisible) {
      $(this.node).show();
    } else {
      $(this.node).hide();
    }
  };

  SimpleTextMarker.prototype.draw = function() {
      var projection = this.getProjection();
      var point = projection.pointFromCoords(this.position);
      var width = this.node.offsetWidth;
      var height = this.node.offsetHeight;

      this.node.style.left = (point.x - width/2) + "px";
      this.node.style.top = (point.y - height/2) + "px";
  };


  var dMap = function (args) {
    this.map = null; // 지도 인스턴스.
    this.markers = []; // 생성된 마커 인스턴스 저장.
    this.polylines = [];
    this.container = document.getElementById('map');  // 지도를 표시할 div
		this.options = {
      center: new daum.maps.LatLng(35.6783, 127.601), // 지도의 중심좌표
      level: 4,
      draggable: true,
      scrollwheel: true,
      disableDoubleClick: false,
      disableDoubleClickZoom: false,
      minLevel : 2,
	  maxLevel : 6
    };
  };

  dMap.prototype = {
    // 지도를 생성함
    makeMap: function (data, conventionFacilities) {
      this.map = new daum.maps.Map(this.container, this.options);
      this.map.addOverlayMapTypeId(daum.maps.MapTypeId.SKYVIEW);
      this.data = data || dummy;
	  this.conventionFacilities = conventionFacilities || dummy2;
	  this.conventionMakeMarkers(this.conventionFacilities);
	  this.makeMarkers(this.data);
      return this;
    },

    // property를 체크하여 마커용 데이터로 변환함
    makePosion: function (obj, title, x, y) {
      var position = {};
      if (obj.hasOwnProperty(x) && obj.hasOwnProperty(y)) {
        position = {
          title: title,
          latlng: new daum.maps.LatLng(obj[y], obj[x]),
          data: obj
        }
      } else {
        console.error('not property...', x, y)
      }
      return position
    },

	// property를 체크하여 편의시설 마커용 데이터로 변환함	
	makeConventionPosition: function (obj, x, y, title) {
      var position = {};
      if (obj.hasOwnProperty(x) && obj.hasOwnProperty(y)) {
        position = {
          title: title, 
          code : obj.code,
          latlng: new daum.maps.LatLng(obj[y], obj[x]),
        }
      } else {
        console.error('not property...', x, y)
      }
      return position
    },
	
    // 마커 구현
    makeMarkers: function (data) {
      var map = this.map;
      var markerClickEvent = this.markerClickEvent;
      var positions = [];
      var lines = [];

      var row  = data;
      
      // 데이터를 만듬
      for (var i=0; i < row.length; i++) {
//    	  for (var row of data) {
        var linePath = [];
        // tee
        var tee = this.makePosion(row[i], 'tee', 'TShotX', 'TShotY');
        positions.push(tee);
        linePath.push(tee.latlng);

        // fairway
        var fairway = this.makePosion(row[i], 'fairway', 'CenterX', 'CenterY');
        positions.push(fairway);
        linePath.push(fairway.latlng);

        // hole
        var hole = this.makePosion(row[i], 'hole', 'HoleCupX', 'HoleCupY');
        positions.push(hole);
        linePath.push(hole.latlng);

        lines.push(linePath);
      } 

      // 마커를 실제 생성함.
      var position = positions;
      for (var i=0; i < position.length; i++) {
//    	  for (var position of positions) {

      //  var marker = new daum.maps.Marker({
      //       clickable: true,
      //       position: position.latlng,
      //       title: position.title,
      //       text: 'test'

      //   });
      //   marker.useData = position;
      //   marker.setMap(map);

        SimpleTextMarker.prototype.onAdd = function() {
          var panel = this.getPanels().overlayLayer;
          this.node.addEventListener('click', markerClickEvent(map, position[i].latlng));
          panel.appendChild(this.node);
        };
        var marker = new SimpleTextMarker(position[i].latlng, '<button class="info_marker info_'+position[i].title+'" title="'+position[i].title+'" data-position="'+position[i].title+'" data-holenum="'+position[i].data.holenum+'""><i class="ico"></i><span class="marker_info_txt">'+position[i].data.holenum+'</span></button>');
//        var marker = new SimpleTextMarker(position.latlng, '<div class="info_marker info_'+position.title+'" title="'+position.title+'"><i class="ico"></i><span class="marker_info_txt">'+position.data.holenum+'</span></div>');
        marker.useData = position[i];
        marker.setMap(map);

        // 마커 인스턴스 저장
        this.markers.push(marker);

      }
      // 라인 생성
       var line = lines;
      // 라인 생성
      for (var i=0; i < line.length; i++) {
//    	  for (var line of lines) {
        // 지도에 표시할 선을 생성합니다
        var polyline = new daum.maps.Polyline({
          path: line[i], // 선을 구성하는 좌표배열 입니다
          strokeWeight: 3, // 선의 두께 입니다
          strokeColor: '#FFF', // 선의 색깔입니다
          strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: 'dashed' // 선의 스타일입니다
        });
        polyline.setMap(this.map);

        // 라인 인스턴스 저장
        this.polylines.push(polyline);
      }

      // 마커 필터 이벤트
      this.eventMarkerFilter();
    },
	  // 편의 시설 마커 구현
    conventionMakeMarkers: function (data) {
      var map = this.map;
      var positions = [];
      var lines = [];

      var row  = data;
      
      // 데이터를 만듬
      for (var i=0; i < row.length; i++) {
//    	  for (var row of data) {
        
		// 편의시설 좌표 
        var position = this.makeConventionPosition(row[i], 'conventionX', 'conventionY', 'facilities');
        positions.push(position);
      }
	  
	  // 마커를 실제 생성함.
      var position = positions;
      for (var i=0; i < position.length; i++) {
        var marker = new SimpleTextMarker(position[i].latlng, '<div class="facilities_marker info_'+position[i].code+'" title="'+position[i].title+'"><i class="ico"></i><span class="marker_info_txt">'+position[i].code+'</span></div>');
        marker.useData = position[i];
        marker.setMap(map);

        // 마커 인스턴스 저장
        this.markers.push(marker);

      }
	},
    markerClickEvent: function (map, position) {
      return function () {
        if(customOverlay) {
            customOverlay.setMap(null);
        }
        customOverlay = new daum.maps.CustomOverlay({
            clickable: true,
            position: position,
            content: content,

            zIndex: 99
        });
        customOverlay.setMap(map);


        map.panTo(position);
        if (slide) {
          slide = $(slide).slick('unslick');
        }
        slide = $('.overlay-slick').slick({
          slidesToShow: 3,
          slidesToScroll: 1
        });
      }
    },
    // 마커 필터 이벤트
    eventMarkerFilter: function () {
      var _self = this;
      $('.btn-marker-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        var show = [];

        // 활성화된 마커 필터만 체크함
        $('.btn-marker-toggle').each(function () {
          var title = $(this).data('markerTitle');
          if ($(this).hasClass('on')) {
            show.push(title);
          }
        });
        // 체크된 필터로 show/hide
        var marker = _self.markers;
        for(var i=0; i<marker.length; i++) {
//        	for(var marker of _self.markers) {
          // var markerTitle = marker.getTitle();
          var markerTitle = marker[i].useData.title;
          if ($.inArray(markerTitle, show) > -1) {
            marker[i].setVisible(true);
          } else {
            marker[i].setVisible(false);
          }
        }
      })
    }
  };

  $(function () {
      w.dMap = new dMap();
  });
})(window, window.jQuery, window.document);
