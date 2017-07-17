  window.onload=function(){
	/*头部banner 轮播*/
		var oUl=document.getElementById('Btn-con');
		var aBtn=oUl.getElementsByTagName('li');

		var oWrap=document.getElementById('bannerWrap');
		var aImg=oWrap.getElementsByTagName('li');
		//初始化
		var num = 0;
		var oldBtn = aBtn[num];
		var oldImg = aImg[num];
		var timer;

			oldImg.style.display = 'block';
			oldBtn.className = 'show';
			//alert(aLi.length);	
			for(var i=0;i<6;i++){
				aBtn[i].index=i;//自定义属性；索引
				aBtn[i].onmouseover=function(){ //onmouseover鼠标滑入
					num = this.index;
					run();		
				}
			}
			
			function run(){//函数的封装
				oldBtn.className = '';
				oldBtn = aBtn[num];//跟新oldBtn
				aBtn[num].className = 'show';
				//图片
				oldImg.style.display = 'none';
				oldImg = aImg[num];
				aImg[num].style.display ='block';
			}
			//定时器
			autoplay();
			function autoplay(){
				timer = setInterval(function(){
					run();
					num++;
					if(num==6){
						num = 0;
					}			
				},2000)	
			}
			
			oUl.onmouseover=function(){
				clearInterval(timer);
			
			}
			oUl.onmouseout=function(){
				autoplay();
			
			}

	/*头部固定搜索框*/

	var oUl=document.getElementById('fixSearch');
	/*左侧导航*/
	var oNav=document.getElementById('sideNav-con');
	var aA= oNav.getElementsByTagName('a');
	//alert(aA.length);
	var oF1=document.getElementById('F1');
	var oF2=document.getElementById('F2');
	var oF3=document.getElementById('F3');
	var oF4=document.getElementById('F4');
	var oF5=document.getElementById('F5');
	var oF6=document.getElementById('F6');
	var oF7=document.getElementById('F7');
	var oF8=document.getElementById('F8');
	//alert(oF1.scrollHeight);
	
	window.onscroll=function(){//window.onscroll文档发生滚动的时候

		//获取浏览器的滚动高度		
		var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
		/*搜索框*/
		if(scrollTop>=700){ //大于700px显示顶部搜索框
			oUl.style.top = '0px';
		}else{		
			oUl.style.top = '-50px';
		}
		/*左侧导航*/
		if(scrollTop>=600){
			oNav.style.width = '35px';
			oNav.style.height = '370px';
		}else{
			oNav.style.width = '0px';
			oNav.style.height = '0px';			
		}
		
		transBgColor(oF1,aA[1],'#F7A945');//实参
		transBgColor(oF2,aA[2],'#19C8A9');
		transBgColor(oF3,aA[3],'#F15453');
		transBgColor(oF4,aA[4],'#64C333');
		transBgColor(oF5,aA[5],'#0AA6E8');
		transBgColor(oF6,aA[6],'#EA5F8D');
		transBgColor(oF7,aA[7],'#66ccff');
		transBgColor(oF8,aA[8],'#DD2727');
		//console.log(oF1.getBoundingClientRect().top);


	}

	function transBgColor(obj,btn,BgColor){//形参
		//getBoundingClientRect()获取元素top,bottom距离浏览器窗口顶部,left,right距离窗口左侧的距离
		//scrollHeihgt	元素的高度；
		
		if(obj.getBoundingClientRect().top<=300 && obj.getBoundingClientRect().top >= -obj.scrollHeight+300){
			//0  至  -450  
			btn.style.background = BgColor;
		}else{
			btn.style.background = '#666';
		
		}	
	
	}

	window.onresize = function(){//浏览器窗口大小发生改变的时候
		
		var offset = getLeft(oNav);
		if(offset <= 20){
			oNav.style.width = '0px';
			oNav.style.height = '0px';			
		}else{		
			oNav.style.width = '35px';
			oNav.style.height = '370px';		
		}	
	}

	function getLeft(obj){
		var offsetLeft = obj.offsetLeft;
		if(obj.offsetParent){
			offsetLeft +=getLeft(obj.offsetParent);	
		}
		return offsetLeft;
	}

	/* 购物状态栏*/
	$('#sideStatus .btn').hover(function(){//鼠标移入
		$(this).parent().siblings().find('.activeTxt').stop(true,true);
		$(this).parent().find('.activeTxt').stop(true,true).show().animate({'right':'45','opacity':'1'},500);
	},function(){//鼠标移开
		$(this).parent().find('.activeTxt').stop(true,true).animate({'right':'100','opacity':'0'},500,function(){		
			$(this).parent().find('.activeTxt').hide();		
		});	
	})

    /* 返回顶部 */
	$(".staList,.NavLast").click(function(){
		//$(document).scrollTop(0)
		$('html,body').animate({scrollTop:'0px'},1000);
	});
  }