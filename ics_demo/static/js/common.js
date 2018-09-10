+(function($,win){
	$(function(){
		//侧导航
		$('.J_levelOne').click(function(){
			var _this = $(this),
				secondList = _this.next('ul'),
				secondListPreIcon = secondList.prev('.J_levelOne').find('.ics_icon'),
				parentLi = _this.parents('li'),
				showList = $('.ics_subnav-second:visible'),
				showListIcon = showList.prev('.J_levelOne').find('.ics_icon');
				
			if(!parentLi.hasClass('current')){
				parentLi.addClass('current').siblings('li').removeClass('current').removeClass('single');
				if(secondList.length == 0){
					parentLi.addClass('single');
				}
				showList.slideUp();
				showListIcon.removeClass('ics_icon-arrowup').addClass('ics_icon-arrowdown');
			}
			if(secondList.length){
				if(secondList.is(':visible')){
					secondListPreIcon.removeClass('ics_icon-arrowup').addClass('ics_icon-arrowdown');	
				}else{
					secondListPreIcon.removeClass('ics_icon-arrowdown').addClass('ics_icon-arrowup');	
				}
				secondList.slideToggle();			
			};
		});	
		
		//二级
		$('.J_levelTwo').click(function(){
			if($(this).hasClass('current')){
				return false;	
			}
			$('.J_levelTwo.current').removeClass('current');
			$(this).addClass('current');	
		});
		
		//dorplist
		
		
		
		/** 
		* 判断浏览器是否支持某一个CSS3属性 
		* @param {String} 属性名称 
		* @return {Boolean} true/false 
		*/
		 
		function supportCss3(style) { 
			var prefix = ['webkit', 'Moz', 'ms', 'o'], i, humpString = [], htmlStyle = document.documentElement.style, 
			_toHumb = function (string) { 
				return string.replace(/-(\w)/g, function ($0, $1) { 
					return $1.toUpperCase(); 
				}); 
			}; 
		 
			for (i in prefix) 
				humpString.push(_toHumb(prefix[i] + '-' + style)); 
		 
				humpString.push(_toHumb(style)); 
		 
			for (i in humpString) 
				if (humpString[i] in htmlStyle) return true; 
		 
				return false; 
		}
		
		//本段js 在线上被后端同学移动到了headCommon.js中了，原因未知 start,所以本文件上线前这里必须注释掉
		if(!supportCss3('transition')){
			var timer = null;
			$('.J_dropList').hover(function(){
				var _dropList = $(this).find('[data-toggle="droplist"]');
				_dropList.removeClass('fn-hide');	
					
			},function(){
				var _this = $(this);
				timer = window.setTimeout(function(){
					var _dropList = _this.find('[data-toggle="droplist"]');
					_dropList.addClass('fn-hide');	
				},100);		
			});
			
			$('[data-toggle="droplist"]').hover(function(){
				if(timer){
					window.clearTimeout(timer);	
				}	
			},function(){
				$(this).addClass('fn-hide');	
			});
		}else{
			$('[data-toggle="droplist"]').removeClass('fn-hide');	
		}
		
		
		//时间选择
		$('.J-time').focus(function(){
			$(this).parent('.ics_time').addClass('ics_time-focus');	
		}).blur(function(){
			$(this).parent('.ics_time').removeClass('ics_time-focus');	
		});
		
		
		//tips提示
		if(!supportCss3('transition')){
			$('.J_tips').hover(function(){
				$(this).find('.ics_tips').removeClass('fn-hide');	
			},function(){
				$(this).find('.ics_tips').addClass('fn-hide');	
			});	
		}else{
			$('.ics_tips').removeClass('fn-hide');
		}
		
		
		
		//tab切换
		$('[data-item="tabItem"]').click(function(){
			var _index = $(this).index();
			//alert(_tParent);
			var _tParent = $(this).closest('[data-plug="tab"]');
			var _tList = _tParent.find('[data-item="tabList"]').eq(_index).removeClass('fn-hide').siblings().addClass('fn-hide');
			$(this).addClass('selected').siblings().removeClass('selected');	
		});
		
		//box折叠展开
		$('.J-boxswitch').click(function(){
			var boxCon = $(this).parents('.ics_box').find('.box-bd');
			var boxConState = boxCon.is(":hidden");
			var $this = $(this)
			if(!boxCon.is(":animated")){
				if(boxConState){
					boxCon.slideDown(100,function(){
						$this.find('em').text('收起');
						$this.find('.ics_icon').removeClass('ics_icon-arrowdown').addClass('ics_icon-arrowup');
					});	
				}else{
					boxCon.slideUp(100,function(){
						$this.find('em').text('展开');
						$this.find('.ics_icon').removeClass('ics_icon-arrowup').addClass('ics_icon-arrowdown');	
					});
				}
			}
		});
		
		//错误提示层的关闭
		$('[data-handle="errortipsX"]').click(function(){
			var $errortipsEle = $(this).parents('[data-plug="errortips"]');
			$errortipsEle.animate({opacity:0},function(){
				$errortipsEle.addClass('fn-hide');	
			});
		});
		
		
		
		/*本段js 在线上被后端同学移动到了headCommon.js中了，原因未知 start*/
		//页面右下角帮助和返回顶部
		/*var dealerUI = {
			showHelpTips : function(ele,toggleEle){
				ele.hideTimer = null;
				ele.showTimer = null;
				
				ele.hover(function(){
					ele.showTimer = window.setTimeout(function(){
						toggleEle.removeClass('fn-hide').stop().animate({opacity:1});
						ele.showTimer = null;
					},200);	
				},function(){
					if(ele.showTimer){ 
						window.clearTimeout(ele.showTimer); 
						return;
					}
					ele.hideTimer = window.setTimeout(function(){
						toggleEle.stop().animate({opacity:0},function(){toggleEle.addClass('fn-hide')});	
					},100);	
				});
				
				toggleEle.hover(function(){
					if(ele.hideTimer){ window.clearTimeout(ele.hideTimer);}	
				},function(){
					toggleEle.stop().animate({opacity:0},function(){toggleEle.addClass('fn-hide')});	
				});
			},
			goTop:function(ele,option){
				var winHei = $(window).height();
				
				function goTopShow(){
					var scrollTop = $(window).scrollTop();
					if(scrollTop > 100){
						ele.stop().animate({marginBottom:option.showMargin});	
					}else{
						ele.stop().animate({marginBottom:option.hideMargin});	
					}	
				};
				goTopShow();
				$(window).scroll(function(){
					goTopShow();	
				});
				ele.click(function(){
					$("html,body").animate({scrollTop:10},200);	
				});
			},
			init:function(){
				dealerUI.showHelpTips($(".J_extendhelp"),$(".J_extendhelpList"));
				dealerUI.goTop($('.J_goTop'),{showMargin:'10px',hideMargin:'-40px'});			
			}
		};
		
		dealerUI.init();
		/*本段js 在线上被后端同学移动到了headCommon.js中了，原因未知 end*/
		
		
		
		
		//table fixed header
		var dealerUI =  dealerUI || {};
		dealerUI.tableFixedHead = {
			defaultData : {}, 
			getDefaultData : function($ele){
				this.defaultData.showline = $ele.data('linenum');
				this.defaultData.theadHei = $ele.find('thead').height();
				this.defaultData.trHei = $ele.find('tbody tr').height();
				this.defaultData.tableHei=$ele.height();
				this.defaultData.showHei = this.defaultData.theadHei + this.defaultData.trHei*this.defaultData.showline;	
			},
			tableHeadShow : function($ele){
				if(this.defaultData.showHei < this.defaultData.tableHei){
					return true;	
				}else{
					return false;	
				}	
			},
			createTableFixedTop : function($ele){
				
				$ele.wrap('<div class="J_tableScrollWrap" style="position:relative;overflow:auto;max-height:'+this.defaultData.showHei+'px;border-top:1px solid #ebebeb;border-right:1px solid #ebebeb;border-bottom:1px solid #ebebeb;"></div>');
				var theadInnerHtml = $ele.find('thead').html();
				var headTopWrap = $('<div class="J_tableFixedTop" style="position:absolute; top:-1px; width:100%;z-index:2;"><table class="ics_table"><thead>'+theadInnerHtml+'</thead></table></div>');
				$('.J_tableScrollWrap').prepend(headTopWrap);
			},
			bindWrapScroll : function($ele){
					var $tableWrap = $ele.parent('.J_tableScrollWrap');
					$tableWrap.scroll(function(){
					var top = $(this).scrollTop()-1;
					$ele.prev(".J_tableFixedTop").css('top',top);
				});	
			},
			init:function(){
				$('[data-role="fixedTop"]').each(function(){
					dealerUI.tableFixedHead.getDefaultData($(this));
					if(dealerUI.tableFixedHead.tableHeadShow()){
						dealerUI.tableFixedHead.createTableFixedTop($(this));
						dealerUI.tableFixedHead.bindWrapScroll($(this));
					}
							
				});
			}
		};
		
		window.dealerUI = dealerUI;
	});
})(jQuery,window);


/**
 * 描述：模拟下拉菜单控件
 * 作者：wangwenqing403@autohome.com.cn
 * 时间：2013-08-16
 */

  'use strict';



  // Select PUBLIC CLASS DEFINITION
  // ==============================

  var Select = function(elem, options) {
    var that = this;
    that.options = options;
    that.$elem = $(elem);
    that.$select = $('.select-selected', that.$elem);
    that.$selectValue = $('span', that.$select);
    that.$list = $('.select-option,.ass-items', that.$elem);

	that.flagIndex = that.$elem.data('seqIndex');
	  
    that.isActive = false;

    that._init();
  };

  Select.DEFAULTS = {};

  Select.prototype._init = function() {
    var that = this;

    that.$elem.trigger('init.as.select', that);

    that.$select.on('click.as.select', $.proxy(that.toggle, that));

    that.$list.on('click.as.select', '[data-value]', function(e) {
      var $item = $(this);

      that.setValue({
        text: $item.attr('data-text'),
        value: $item.attr('data-value')
      });

      that.hide();

      return false;
    });

    if (that.options.listwidth) {
      that.$list.width(that.options.listwidth);
    }
  };

  Select.prototype.setValue = function(data) {
    var current = this.getValue();
    var $item = null;

    if (current.value !== data.value) {
      $item = this.$list.find('[data-value="' + data.value + '"]');

      this.$selectValue.text(data.text);
      this.$selectValue.attr('data-value', data.value);

      this.$list.find('[data-value]').removeClass('current');
      $item.addClass('current');

      this.$elem.trigger('change.as.select', [data, $item]);
    }
  };

  Select.prototype.getValue = function() {
    return {
      text: this.$selectValue.text(),
      value: this.$selectValue.attr('data-value')
    };
  };

  Select.prototype.toggle = function() {
    if (this.isActive) {
      this.hide();
    } else {
      this.show();
    }
  };

  Select.prototype.show = function() {
    var that = this;

    if (that.$elem.hasClass('select-disabled')) {
      return;
    }

    $(document).on('click.as.select'+that.flagIndex, function(e) {
      var $parent = $(e.target).closest(that.$elem);
      if ($parent.length === 0) {
        that.hide();
      }
    });

    that.$elem.addClass('active').trigger('show.as.select', that);
    that.$list.show();
    that.isActive = true;
    that.$elem.trigger('shown.as.select', that);
  };

  Select.prototype.hide = function() {
    this.$list.hide();
    this.isActive = false;
    this.$elem.removeClass('active').trigger('hide.as.select', this);
    $(document).off('click.as.select'+this.flagIndex);
  };

  Select.prototype.disabled = function() {
    if (this.$elem.hasClass('select-disabled')) {
      this.$elem.removeClass('select-disabled');
    } else {
      this.$elem.addClass('select-disabled');
    }
  };


  // Select PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function(index) {
      var $this = $(this);
      var data = $this.data('as.select');
      var options = $.extend({}, Select.DEFAULTS, $this.data(), option);
	  
	  $(this).data('seqIndex',index);
		
      if (!data) {
        $this.data('as.select', (data = new Select(this, options)));
      }

      if (typeof option === 'string') {
        data[option]();
      }
    });
  }

  var old = $.fn.select;

  $.fn.select = Plugin;
  $.fn.select.Constructor = Select;


  // Select NO CONFLICT
  // ==================

  $.fn.select.noConflict = function() {
    $.fn.select = old;
    return this;
  };


  // Select DATA-API
  // ===============

  if (window.ASSAutoInit !== false) {
    $(function() {
      Plugin.call($('[data-toggle="select"]'));
    });
  }