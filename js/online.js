$(function(){
	$('.rightBox').on('tap','.portraitImg',function(){
		if($('.listsConcat').is(':hidden')){
			$('.listsConcat').fadeIn(500);
		}else{
			$('.listsConcat').fadeOut(500);
		}
	})
    $('.listsConcat').on('tap','li',function(){
		$(this).addClass('onActive').siblings().removeClass('onActive');
	})

})