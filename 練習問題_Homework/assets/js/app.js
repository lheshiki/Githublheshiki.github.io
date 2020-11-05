// Q1
$(function(){
			 $('#q1-btn').on('click',function(){$(this).addClass('small-btn')})
			}
 )

// Q2

			 $('#q2-btn').on('mouseover',function(){$(this).css('opacity',0.2)})


// Q3

			 $('#q3-btn').on('mouseover',function(){$(this).css('opacity',0.2)})
			 $('#q3-btn').on('mouseleave',function(){$(this).css('opacity',1)})


// Q4

			 $('#q4-btn').on('click',function(){$('#q4-text').text('Wakattekitayo')})


// Q5
			 $('#q5-btn').on('click',function()
			 								　{$('.orange').before('<li class="apple">リンゴ</li>')})


// Q6

			 $('#q6-btn').on('click',function(){
			 								   $('.q6-text').after('<p class="red">追加文字</p>')
			 								   }
			  				)


// Q7
			 $('#q7-btn').on('click',function()
			 								 {
			 								 if ($(this).hasClass('on'))
			 								 	{$(this).removeClass('on')}
			 								 else{$(this).addClass('on')}
			 								 }
			 				)

// Q8
			 $('#q8-btn').on('click',function()
			 								  {
			 								  	$(this).siblings().slideToggle()
			 								  }
			 				)

// Q9
			 $('#q9-btn').on('click',function(){$(this).animate({top:0,right:0})})


// Q10
			 $('.q10-show-btn').on('click',function(){$('.q10-target').css('opacity',0)})
			 $('.q10-hide-btn').on('click',function(){$('.q10-target').css('opacity',1)})
















