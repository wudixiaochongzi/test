
$(function () {
  'use strict';

  //picker
  $(document).on("pageInit", "#page-picker", function(e, id, page) {
    $("#picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
        <button class="button button-link pull-left">\
      按钮\
      </button>\
      <button class="button button-link pull-right close-picker">\
      确定\
      </button>\
      <h1 class="title">标题</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
        }
      ]
    });
    $("#picker-name").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">请选择称呼</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['赵', '钱', '孙', '李', '周', '吴', '郑', '王']
        },
        {
          textAlign: 'center',
          values: ['杰伦', '磊', '明', '小鹏', '燕姿', '菲菲', 'Baby']
        },
        {
          textAlign: 'center',
          values: ['先生', '小姐']
        }
      ]
    });
  });
  $(document).on("pageInit", "#page-datetime-picker", function(e) {
    $("#datetime-picker").datetimePicker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">选择日期和时间</h1>\
      </header>'
    });
  });

  $(document).on("pageInit", "#page-city-picker", function(e) {
    $("#city-picker").cityPicker();
  });
  
  $(document).on("pageInit", "#invest-page", function(e) {
    $("#use-coupon").picker({
		  toolbarTemplate: '<header class="bar bar-nav">\
		  <button class="button button-link pull-left">取消</button>\
		  <button class="button button-link pull-right">确定</button>\
		  <h1 class="title">请选择优惠券</h1>\
		  </header>',
		  cols: [
				{
				  textAlign: 'center',
				  values: ['抵用券', '加息券']
				  //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
				},
				{
				  textAlign: 'center',
				  values: ['抵用券10元', '抵用券8元', '抵用券5元', '抵用券2元']
				}
			  ]
		});
  });
  $(document).on("pageInit","#loan-product-info",function(e){
    $("#shop-picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择商城</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['大连马栏广场','大连香炉礁']
        }
      ]
    });
    $("#manager-picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择客户经理</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['邵志超','吴高辉']
        }
      ]
    });
    $("#city-picker").cityPicker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择省市区</h1>\
                          </header>'
    });
  });
  $(document).on("pageInit","#uc-message-center",function(e){

    $(".message-hd").click(function(){
      if(!$(this).hasClass("read")){
        $(this).addClass("read")
        $(this).children(".item-media").children("i").removeClass("icon-message").addClass("icon-message_open")
      };
      $(this).toggleClass("active");
      $(this).siblings().toggleClass("active")
    })
    });
	//我的账户-交易记录效果
	$(document).on("pageInit","#transaction_records",function(e){
      $(".content").on("click", ".tr-list .tr-list-hd", function () {
        $(this).parent().toggleClass("active");
      })
    });
  //绑定银行卡 白拿-绑定银行卡 体验金-绑定银行卡 新手标-绑定银行卡
  $(document).on("pageInit","#bind_bankcard,#free_bind_bankcard,#experience_bind_bankcard,#novice_bind_bankcard",function(e){
    // 选择开户银行
    $("#bank_picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择银行</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['建设银行', '招商银行']
        }
      ]
    });
    //  选择开户省市
    $("#bank_province").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择开户省</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['北京', '辽宁', '吉林', '黑龙江', '天津', '上海', '重庆']
        }
      ]
    });
    $("#bank_city").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择开户市</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['东城区', '大连市', '长春市', '哈尔滨市', '和平区', '普陀区', '江北区']
        }
      ]
    });
   //  选择开户网点
    $("#bank_area").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择开户网点</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['五一路南沙支行', '甘井子机场支行']
        }
      ]
    });
  });
  
  $(document).on("pageInit","#uc-asset-details",function(e){
    var data = [
      {
        value: 40,
        color:"#b4ffe1"
      },
      {
        value : 30,
        color : "#32daff"
      },
	  {
        value : 30,
        color : "#fef898"
      }

    ]
	
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(data, {percentageInnerCutout : 90});
  });
   $(document).on("pageInit","#uc-asset-details2",function(e){
    var data = [
      {
        value: 40,
        color:"#b4ffe1"
      },
      {
        value : 30,
        color : "#fb8996"
      },
	  {
        value : 30,
        color : "#fef898"
      }

    ]
	
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(data, {percentageInnerCutout : 90});
  });
  
  // 常见问题 答案显隐切换
  $(document).on("pageInit","#normal_question",function(e){
    $(".normal-question-hd").click(function(){
      $(this).toggleClass("active");
      $(this).siblings().toggleClass("active")
    })
  });
  // 银行维护信息 显隐切换
  $(document).on("pageInit","#maintain_bank_info",function(e){
    $(".maintain-bank-hd").click(function(){
      $(this).toggleClass("active");
      $(this).siblings().toggleClass("active")
    })
  });
	$(document).on("pageInit",".invest-product-page,#index",function(e){
	//  进度环 根据值显示
	if($(".project-progress").length > 0){
		$('.project-progress').each(function(index, el) {
			var num = 180 - $(this).find('.project-progress-txt em').text()*3.6;
			if (num>=0) {
				$(this).find('.pie2').css({'-webkit-transform': "rotate(" + num + "deg)",'-moz-transform': "rotate(" + num + "deg)",'-ms-transform':"rotate(" + num + "deg)",'transform':'rotate(" + num + "deg)'});
				$(this).find('.pie1').css({'-webkit-transform': "rotate(180deg)",'-moz-transform': "rotate(180deg)",'-ms-transform':"rotate(" + num + "deg)",'transform': 'rotate(180deg)'});
			} else {
				$(this).find('.pie2').css({'-webkit-transform': "rotate(360deg)",'-moz-transform': "rotate(360deg)",'-ms-transform':"rotate(" + num + "deg)",'transform': 'rotate(360deg)'});
				$(this).find('.pie1').css({'-webkit-transform': "rotate(" + (num-180) + "deg)",'-moz-transform': "rotate(" + (num-180) + "deg)",'-ms-transform':"rotate(" + num + "deg)",'transform': 'rotate(" + (num-180) + "deg)'});
			};
		});
		}  
	});
  //  关闭侧边栏时候把class  "panel-left-body"删掉 避免 左边栏菜单点击出现
  $(document).on("click",".open-panel-menu",function(){
    $.openPanel("#panel-left-menu");
    $("body").addClass("panel-left-body with-panel-left-reveal");
  });
  $(document).on('closed', function () {
    $("body").removeClass("panel-left-body with-panel-left-reveal");
  });
  $(document).on("click",".leftmenu-person-nav li",function(){
    $("body").removeClass("panel-left-body with-panel-left-reveal");
  });
  $(document).on("click",".leftmenu-person a",function(){
    $("body").removeClass("panel-left-body with-panel-left-reveal");
  });
  //成功页
  $(document).on("pageInit","#page_success",function(e){
    function state(){
      $(".success-bg").css("background-image","url()");
      $(".success-bg").hide();
      $(".state2-bg").css("display","inline-block");
      $(".state2-bg").addClass("fadeIn")
    }
    setTimeout (function(){state()},3500)
  });
  //失败页
  $(document).on("pageInit","#page_fail",function(e){
    $(".fail-bg").addClass("fadeIn")
  });
  // 回款中 已回款 还款中 详细内容显隐切换
  $(document).on("pageInit",".transaction-record-detail",function(e){
    $(".list-hd").click(function(){
      $(this).toggleClass("active");
      $(this).siblings().toggleClass("active")
    })
  });
  // 我的理财-回款中（债权转让） 项目协议 操作表
  $(document).on("pageInit","#my_financy_load",function(e){
    $(document).on('click','.agreement-btn', function () {
      var buttons1 = [
        {
          text: '项目协议',
          label: true
        },
        {
          text: '借款合同',
          onClick: function() {
            $.router.loadPage("协议-借款合同.html");
          }
        },
        {
          text: '理财服务协议',
          onClick: function() {
            $.router.loadPage("协议-理财服务协议.html");
          }
        }
      ];
      var buttons2 = [
        {
          text: '取消',
          bg: 'danger'
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
    });
  });
  // 我的账户-我的理财-债权转让完成-查看 项目协议 操作表
  $(document).on("pageInit","#my_financy_finish",function(e){
    $(document).on('click','.agreement-btn', function () {
      var buttons1 = [
        {
          text: '项目协议',
          label: true
        },
        {
          text: '借款合同',
          onClick: function() {
            $.router.loadPage("协议-借款合同.html");
          }
        },
        {
          text: '理财服务协议',
          onClick: function() {
            $.router.loadPage("协议-理财服务协议.html");
          }
        },
        {
          text: '债权转让协议',
          onClick: function() {
            $.router.loadPage("协议-理财服务协议.html");
          }
        }
      ];
      var buttons2 = [
        {
          text: '取消',
          bg: 'danger'
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
    });
  });
  // 晒收益 分享方式弹出
  $(document).on("pageInit","#sun_returns",function(e){
    $(".sun-returns-btn").click(function(){
      $(".picker-modal").removeClass("modal-out");
      $(".picker-modal").addClass("modal-in");
      $(".modal-overlay").show();
    });
    $(".close").click(function(){
      $(".picker-modal").removeClass("modal-in");
      $(".picker-modal").addClass("modal-out");
      $(".modal-overlay").hide();
    });
  });
  // 点击重新加载
  $(document).on("pageInit","#page_reload",function(e){
    //可绑定 鼠标按下 mousedown 鼠标松开 mouseup 触摸按下 touchstart 触摸松开 touchend 事件
    $('#page_reload').on(' touchend',function(e){
      location.href="首页.html";  // 网页跳转
      //location.reload();         // 刷新本页
    });
  });
  //白拿-报名信息 体验金-绑定银行卡 新手标-绑定银行卡
  $(document).on("pageInit","#free_userinfo,#experience_bind_bankcard,#novice_bind_bankcard",function(e){
    // 选择所在省
    $("#free_province").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">所在省份</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['北京','辽宁']
        }
      ]
    });
    // 选择所在市
    $("#free_city").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">所在城市</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['沈阳','大连']
        }
      ]
    });
    // 选择活动商场
    $("#shop_picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker">确定</button>\
                          <h1 class="title">选择商城</h1>\
                          </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['大连马栏广场','大连香炉礁']
        }
      ]
    });
  });
  $.init();
});
/* 首页tab切换 */
$(function () {
  $(".home-page-section .tab-link").click(function () {
    var index = $(this).index();
    if(index == 0){
      $(this).addClass("tab1-active");
      $(this).siblings().removeClass("tab2-active tab3-active");
    }else if(index == 1){
      $(this).addClass("tab2-active");
      $(this).siblings().removeClass("tab1-active tab3-active");
    }else if(index == 2) {
      $(this).addClass("tab3-active");
      $(this).siblings().removeClass("tab1-active tab2-active");
    }
  })
});

// 优惠券选中样式
$(function(){
    var $popup=$('.popup');
    var $stamp=$('.stamp');
    $popup.on('click','.stamp',function(){
        var $stampChoose=$(this).find('.coupon-choose');
        var $couponchoose=$popup.has(this).find('.coupon-choose'); //获取到当前类型的优惠券中所有的对勾
        if($stampChoose.attr('state')=='1'){
            $stampChoose.hide().attr('state','0'); //状态属性state为0不选中，为1选中
        }else{
            $couponchoose.hide().attr('state','0');
            $stampChoose.show().attr('state','1');
        }
    })
});