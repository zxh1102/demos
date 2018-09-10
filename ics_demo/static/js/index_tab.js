;(function($){
$.fn.J_gallery=function(options){
	var opt={
		thumWidth:110,              //芥匙老啊肺
		thumGap:8,                  //芥匙老埃拜
		thumMoveStep:5,             //芥匙老捞悼肮荐
		moveSpeed:300,              //捞悼加档
		fadeSpeed:300,              //拳搁傈券加档
		end:''
	}
	$.extend(opt,options);
	return this.each(function(){
		var $this=$(this);
		var $thumSet=$this.find('.J_thumSet');
		var $thumMove=$thumSet.find('.J_thumMove');
		var $tabCon = $thumSet.find('.J_thumCon');
		var $thumList=$thumMove.find('a');
		var $nextPageBtn=$this.find('.J_nextPageBtn');
		var $prevPageBtn=$this.find('.J_prevPageBtn');
		var tabConWid = $tabCon.width();
		var objNum=$thumList.length;
		var currentObj=0;
		var fixObj=0;
		var currentPage=0;
		var totalPage=Math.floor(objNum/opt.thumMoveStep);
		var oldImg;
		var isMulitpleList = true;
		var notLastScreen = true;
		
		//切换相关
		var tempPos =[{"lefSize":0,"startIndex":0}];
		var pos = 0;
		var thumWrapWidth = $thumSet.outerWidth();
		
		
		if(this.completed){
			return ;
		}else{
			init();
			this.completed = true;	
		}
		
		function init(){
			hasMulitple();
			if(isMulitpleList){
				setTabWid();
				setMouseEvent();
				setVisibleBtn();		
			}
							
		};
		
		//判断是否不需要tab切
		function hasMulitple(){
			if(tabConWid <= thumWrapWidth){
				isMulitpleList = false;
				$this.addClass('ics_tab-multiple-noarrow');
			}	
		}

		//设置宽度
		function setTabWid(){
			$thumMove.width(tabConWid);
		};

		//官牢爹
		function setMouseEvent(){
			$nextPageBtn.bind('click',function(){
				if($(this).hasClass('tab-switch-disabled')){ return}
				moveGoThum();
			});
			$prevPageBtn.bind('click',function(){
				if($(this).hasClass('tab-switch-disabled')){ return}
				moveBackThum();
			});
		
		}
		
		//芥匙老 捞悼
		
		function moveGoThum(){
			var thumListWidth = 0;
			var maxListNum = tempPos[tempPos.length-1].startIndex;
			var pos = tempPos[tempPos.length-1].lefSize;
			$thumList.each(function(index,ele){
				if(index >= maxListNum){
					thumListWidth+= $(ele).outerWidth(true);
					if(thumListWidth > thumWrapWidth){
						maxListNum = index;
						return false;
					}
				}
			});
			/*var pos=((opt.thumWidth+opt.thumGap)*opt.thumMoveStep)*currentPage;*/
			
			//判断是否为最后一屏
			var residueListWidths = 0;
			
			if(notLastScreen){
				pos += thumListWidth - $thumList.eq(maxListNum).outerWidth(true);
				$thumMove.animate({'left':-pos},opt.moveSpeed);
				tempPos.push({"lefSize":pos,"startIndex":maxListNum});
				//		
			}
			$thumList.each(function(index,ele){
				if(index >= maxListNum){
					residueListWidths+= $(ele).outerWidth(true);
					if((index == objNum-1) && residueListWidths < thumWrapWidth){
						notLastScreen = false;	
					}else{
						notLastScreen = true;	
					}
				}
			});
			setVisibleBtn();
		};
		function moveBackThum(){
			tempPos.pop();
			var pos = tempPos[tempPos.length-1].lefSize;
			$thumMove.animate({'left':-pos},opt.moveSpeed);	
			notLastScreen = true;
			setVisibleBtn();
			
		}

		//捞固瘤函版俊 蝶弗 滚瓢贸府
		function setVisibleBtn(){
			
			if(tempPos.length==1){
				$prevPageBtn.addClass("tab-switch-disabled");
			}else{
				$prevPageBtn.removeClass("tab-switch-disabled");	
			}
			if(notLastScreen){
				$nextPageBtn.removeClass("tab-switch-disabled");
			}else{
				$nextPageBtn.addClass("tab-switch-disabled");	
			}
		}
	})
}
})(jQuery)