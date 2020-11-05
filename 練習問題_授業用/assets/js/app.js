// jQuery使う時
// $(function(){行いたい処理}); という記述で書く
// Q1
  	//  // Javascriptで書いたパターン
  	// document.querySelector('#q1-btn').addEventListener('click',function(){this.classList.add('large-btn')})

  	// jQueryで書いたパターン
  	$('#q1-btn').on('click',function(){$(this).addClass('large-btn')})

// Q2

  	$('#q2-btn').on('mouseover',function(){$(this).css('opacity',0.5)})

// Q3
  	$('#q3-btn').on('mouseover',function(){$(this).css('opacity',0.5)})
  	$('#q3-btn').on('mouseleave',function(){$(this).css('opacity',1)})

// Q4
  	$('#q4-btn').on('click',function(){$('#q4-text').text('harahetta')})

// Q5
  	$('#q5-btn').on('click',function()
  					{
  					 $('.apple').before('<li class="grape">ぶどう</li>')
  					}
  				   )

// Q6
  	 $('#q6-btn').on('click',function(){
  	 									$('.q6-text').append('<span class="red">追加</span>')
  									　　}
  					    ) 

// Q7
     $('#q7-btn').on('click',function(){
                                        // if ($(this).hasClass('on'))
                                        // {$(this).removeClass('on')}
                                        // else{$(this).addClass('on')}
                                        $(this).toggleClass('on')
                                       }
                    )

// Q8
    $('#q8-btn').on('click',function(){$(this).siblings().slideToggle()})

// Q9
    $('#q9-btn').on('click',function(){$('html,body').animate({scrollTop:$('#q1-btn').offset().top})})

// Q10
    $('.q10-show-btn').on('click',function(){ $('.q10-target').fadeIn(1000) })
    $('.q10-hide-btn').on('click',function(){ $('.q10-target').fadeOut(1000) })

// Q11
    $(window).on('scroll',function(){
                                      // idがq11の要素の画面最上部からの距離を取得
                                      let q11_position = $('#q11').offset().top
                                      // 画面の高さ(ブラウザで見えてる領域)
                                      let wh = $(window).height()
                                      // 現在のスクロル位置（今見てるところ）
                                      let now_position = $(window).scrollTop()

                                      if (wh + now_position >= q11_position)
                                         {$('.q11-target').removeClass('hide')}
                                      else{$('.q11-target').addClass('hide')}
                                     }
                )
// Q12
$('#q12-btn').on('click',function(){$('.q12-target').toggleClass('hide')})



