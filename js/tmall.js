  window.onload=function(){
	/*ͷ��banner �ֲ�*/
		var oUl=document.getElementById('Btn-con');
		var aBtn=oUl.getElementsByTagName('li');

		var oWrap=document.getElementById('bannerWrap');
		var aImg=oWrap.getElementsByTagName('li');
		//��ʼ��
		var num = 0;
		var oldBtn = aBtn[num];
		var oldImg = aImg[num];
		var timer;

			oldImg.style.display = 'block';
			oldBtn.className = 'show';
			//alert(aLi.length);	
			for(var i=0;i<6;i++){
				aBtn[i].index=i;//�Զ������ԣ�����
				aBtn[i].onmouseover=function(){ //onmouseover��껬��
					num = this.index;
					run();		
				}
			}
			
			function run(){//�����ķ�װ
				oldBtn.className = '';
				oldBtn = aBtn[num];//����oldBtn
				aBtn[num].className = 'show';
				//ͼƬ
				oldImg.style.display = 'none';
				oldImg = aImg[num];
				aImg[num].style.display ='block';
			}
			//��ʱ��
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

	/*ͷ���̶�������*/

	var oUl=document.getElementById('fixSearch');
	/*��ർ��*/
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
	
	window.onscroll=function(){//window.onscroll�ĵ�����������ʱ��

		//��ȡ������Ĺ����߶�		
		var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
		/*������*/
		if(scrollTop>=700){ //����700px��ʾ����������
			oUl.style.top = '0px';
		}else{		
			oUl.style.top = '-50px';
		}
		/*��ർ��*/
		if(scrollTop>=600){
			oNav.style.width = '35px';
			oNav.style.height = '370px';
		}else{
			oNav.style.width = '0px';
			oNav.style.height = '0px';			
		}
		
		transBgColor(oF1,aA[1],'#F7A945');//ʵ��
		transBgColor(oF2,aA[2],'#19C8A9');
		transBgColor(oF3,aA[3],'#F15453');
		transBgColor(oF4,aA[4],'#64C333');
		transBgColor(oF5,aA[5],'#0AA6E8');
		transBgColor(oF6,aA[6],'#EA5F8D');
		transBgColor(oF7,aA[7],'#66ccff');
		transBgColor(oF8,aA[8],'#DD2727');
		//console.log(oF1.getBoundingClientRect().top);


	}

	function transBgColor(obj,btn,BgColor){//�β�
		//getBoundingClientRect()��ȡԪ��top,bottom������������ڶ���,left,right���봰�����ľ���
		//scrollHeihgt	Ԫ�صĸ߶ȣ�
		
		if(obj.getBoundingClientRect().top<=300 && obj.getBoundingClientRect().top >= -obj.scrollHeight+300){
			//0  ��  -450  
			btn.style.background = BgColor;
		}else{
			btn.style.background = '#666';
		
		}	
	
	}

	window.onresize = function(){//��������ڴ�С�����ı��ʱ��
		
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

	/* ����״̬��*/
	$('#sideStatus .btn').hover(function(){//�������
		$(this).parent().siblings().find('.activeTxt').stop(true,true);
		$(this).parent().find('.activeTxt').stop(true,true).show().animate({'right':'45','opacity':'1'},500);
	},function(){//����ƿ�
		$(this).parent().find('.activeTxt').stop(true,true).animate({'right':'100','opacity':'0'},500,function(){		
			$(this).parent().find('.activeTxt').hide();		
		});	
	})

    /* ���ض��� */
	$(".staList,.NavLast").click(function(){
		//$(document).scrollTop(0)
		$('html,body').animate({scrollTop:'0px'},1000);
	});
  }