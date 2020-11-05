

$('#toggle').on('click',function(){
								   $(this).toggleClass('on')
								   $('.drawer').toggleClass('on')
								   if ($('.drawer').hasClass('on'))
									  {
									  	$('.drawer').fadeIn(1000)
									  }
								   else{$('.drawer').fadeOut(1000)}
								  }
			   )