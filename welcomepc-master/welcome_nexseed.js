

$('#toggle').on('click',function(){
								   $(this).toggleClass('on')
								   $('.drawer').toggleClass('on')
								   luis()
								  }
			   )

function luis(){if ($('.drawer').hasClass('on'))
				   {
				  	$('.drawer').fadeIn(1000)
				   }
			    else{$('.drawer').fadeOut(1000)}
					}
