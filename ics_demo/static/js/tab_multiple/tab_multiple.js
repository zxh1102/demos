$(function () {
	//计算传入的元素的宽度
    function f(l) {
        var k = 0;
        $(l).each(function () {
            k += $(this).outerWidth(true)
        });
        return k
    }
	
    function g(n) {
		//获取传入元素的前面所有元素的宽度
        var o = f($(n).prevAll()),
		
		//获取传入元素的后面所有元素的宽度
        q = f($(n).nextAll());
		
		var $tabNavCon = $(this).parents('.J-tabNavCon');
		
		//获取左右切换按钮元素
        var l = f($(this).parents('.J-tabNav').children().not('.J_menuTabs'));
		//获取可以放签的区域的宽度
        var k = $(this).parents('.J-tabNav').outerWidth(true) - l;
		
        var p = 0;
		//如果能放的下，不做处理
        if ($tabNavCon.outerWidth() < k) {
            p = 0
        } else {
			//如果放不下所有的
            if (q <= (k - $(n).outerWidth(true) - $(n).next().outerWidth(true))) {
                if ((k - $(n).next().outerWidth(true)) > q) {
                    p = o;
                    var m = n;
                    while ((p - $(m).outerWidth()) > ($tabNavCon.outerWidth() - k)) {
                        p -= $(m).prev().outerWidth();
                        m = $(m).prev()
                    }
                }
            } else {
                if (o > (k - $(n).outerWidth(true) - $(n).prev().outerWidth(true))) {
                    p = o - $(n).prev().outerWidth(true)
                }
            }
        }
        $tabNavCon.animate({
            marginLeft: 0 - p + 'px'
        }, 'fast')
    }
	
	
    function a() {
		var $tabNav = $(this).parents('.J-tabNav');
		var $tabNavCon = $tabNav.find('.J-tabNavCon');
		
		
        var o = Math.abs(parseInt($tabNavCon.css('margin-left')));
        var l = f($tabNav.children().not('.J_menuTabs'));
        var k = $tabNav.outerWidth(true) - l;
        var p = 0;
        if ($tabNavCon.width() < k) {
            return false
        } else {
            var m = $tabNav.find('.J_menuTab:first');
            var n = 0;
            while ((n + $(m).outerWidth(true)) <= o) {
                n += $(m).outerWidth(true);
                m = $(m).next()
            }
            n = 0;
            if (f($(m).prevAll()) > k) {
                while ((n + $(m).outerWidth(true)) < (k) && m.length > 0) {
                    n += $(m).outerWidth(true);
                    m = $(m).prev()
                }
                p = f($(m).prevAll())
            }
        }
		
        $tabNavCon.animate({
            marginLeft: 0 - p + 'px'
        }, 'fast')
    }
	
    function b() {
		
		var $tabNav = $(this).parents('.J-tabNav');
		var $tabNavCon = $tabNav.find('.J-tabNavCon');
		
		//ul的marginleft值
        var o = Math.abs(parseInt($tabNavCon.css('margin-left')));
		
		//计算两个按钮的宽度
        var l = f($tabNav.children().not('.J_menuTabs'));
		//计算可显示tab签的区域的大小
        var k = $tabNav.outerWidth(true) - l;
		
        var p = 0;
		//如果可显示的区域比目前所有tab签总的宽度大，说明没占满，什么都不做
        if ($tabNavCon.width() < k) {
            return false
        } else {
			//如果放不下
			//第一个tab签
            var m = $tabNav.find('.J_menuTab:first');
            var n = 0;
            while ((n + $(m).outerWidth(true)) <= o) {
                n += $(m).outerWidth(true);
                m = $(m).next()
            }
            n = 0;
            while ((n + $(m).outerWidth(true)) < (k) && m.length > 0) {
                n += $(m).outerWidth(true);
                m = $(m).next()
            }
			//获取最后那个tab签前面的所有tab签
            p = f($(m).prevAll());
            if (p > 0) {
                $tabNavCon.animate({
                    marginLeft: 0 - p + 'px'
                }, 'fast')
            }
        }
    }

    function e() {
		//不是当前选中的那个tab的才做处理
        if (!$(this).hasClass('current')) {
            //选中不选中
			var _index = $(this).index();
			$(this).addClass('selected').siblings('.J_menuTab').removeClass('selected');
			$(this).parents('.J-tabMultiple').find('.J-tabConItem').hide().eq(_index).show();
            //位移计算核心方法
			g(this);
        }
    }
	//每个tab被点击
    $('.J_menuTabs').on('click', '.J_menuTab', e);

    $('.J_tabLeft').on('click', a);
    $('.J_tabRight').on('click', b);
	
	
});
