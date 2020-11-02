// jQuery使う時
// $(function(){行いたい処理}); という記述で書く
// Q1
$(function()
  {
  	//  // Javascriptで書いたパターン
  	// document.querySelector('#q1-btn').addEventListener('click',function(){this.classList.add('large-btn')})

  	// jQueryで書いたパターン
  	$('#q1-btn').on('click',function(){$(this).addClass('large-btn')})
  }
 )

// Q2

$(function()
  {
  	$('#q2-btn').on('mouseover',function(){$(this).css('opacity',0.5)})
  }
 )

// Q3

$(function()
  {
  	$('#q3-btn').on('mouseover',function(){$(this).css('opacity',0.5)})
  	$('#q3-btn').on('mouseleave',function(){$(this).css('opacity',1)})
  }
 )

// Q4
$(function()
  {
  	$('#q4-btn').on('click',function(){$('#q4-text').text('harahetta')})
  }
 )

// Q5
$(function()
  {
  	$('#q5-btn').on('click',function()
  					{
  					 $('.apple').before('<li class="grape">ぶどう</li>')
  					}
  				   )
  }
 )

// Q6
$(function()
  	{
  	 $('#q6-btn').on('click',function(){
  	 									$('<span class="red">追加</span>').insertAfter('.q6-text')
  									　　}
  					) 
    }
  )





