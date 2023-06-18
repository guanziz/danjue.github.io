;console.log('��Դ��,���ɱ༭��Դ����Ψһ���ص�ַ: http://www.bootstrapmb.com/item/8427 ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.bootstrapmb.com/item/8427'}};$(function(){
	//	��Ƶ����
	$('<div class="mask-bg2"></div>)').appendTo($("body"));
		var maskWidth=$(document).width();
		var maskHeight=$(document).height();
		$('.mask-bg2').css({
			'opacity':0.6,
			'backgroundColor':'#000',
			'left':0,
			'top':0,
			'right':0,
			'position':'absolute',
			'z-index':3332,
			'width':maskWidth,
			'height':maskHeight	,
			'display':'none'
		})
	
		$('.video-tu').click(function(){
			$('.video-cont').addClass('in');
			$('.mask-bg2').fadeIn();
		})
		$('.close').click(function(){
			$('.video-cont').removeClass('in');
			$('.mask-bg2').fadeOut();
		})
	
	//input		
		$('input[type=text]').bind({
			focus:function(){
			if (this.value == this.defaultValue){
				this.value="";
			}
			},blur:function(){
			if (this.value == ""){
				this.value = this.defaultValue;
			}
			}
		});
		

	
	
	//���ֶ���
	$('.sec1-right').ready(function(){
		        $('.strong1').animationCounter({
		          start: 0,
		          end: 448,
		          step: 8,
		          delay:50
		        });
		        $('.strong2').animationCounter({
		          start: 0,
		          end: 305,
		          step: 5,
		          delay:50
		        });
		        $('.strong3').animationCounter({
		          start: 0,
		          end: 65,
		          step: 1,
		          delay: 50
		        });
		        $('.strong4').animationCounter({
		          start: 0,
		          end:9,
		          step: 1,
		          delay: 100
		        });
		    });		
		    
	jQuery(".sec2gun").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,scroll:1});  
	jQuery(".sec4gun").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,scroll:1}); 

	
	
	 var swiper1 = new Swiper('.box1',{
//			  autoplay: {
//				delay: 5000,  
//				disableOnInteraction: false,
//			  },
			  speed: 700,
			  allowTouchMove: false,
			  lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 3,
			  },
			  centeredSlides: true,
			  spaceBetween : 30,
			  slidesOffsetBefore: 0,
			  loop: true,
			  slidesPerView : 'auto',
			  pagination: {
				el: '.swiper-pagination',
				clickable :true,
				renderBullet: function (index, className) {
	              return '<div class="' + className + '"><span></span><i></i></div>';
	            },
			  },
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			});
			 
		window.onresize=function(){
			  swiper1.update();
		}
			

			
	
})
;console.log('��Դ��,���ɱ༭��Դ����Ψһ���ص�ַ: http://www.bootstrapmb.com/item/8427 ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.bootstrapmb.com/item/8427'}};