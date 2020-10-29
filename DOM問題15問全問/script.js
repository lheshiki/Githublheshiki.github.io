// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1


// Q 2


// Q 3


// Q 4 (難)
// 「for of」を使います。

// Q 5

// Q 6

// Onclickパターン
	// function Q6click()
	//  { 
	//   var msg = document.getElementById('q6-text')
 //      msg.style.color = 'green'
	//   console.log('Click')
	//   };

var msg = document.querySelector('#q6-text')
msg.addEventListener('click',function(){this.style.color = 'red'})

// Q ７
var msg = document.querySelector('#q7-text')
msg.addEventListener('mouseover',function(){this.style.color = 'white'})
msg.addEventListener('mouseover',function(){this.style.backgroundColor = 'black'})

// Q 8
var msg = document.querySelector('#q8-text')
msg.addEventListener('mouseover',function(){this.style.color = 'white'})
msg.addEventListener('mouseover',function(){this.style.backgroundColor = 'black'})
msg.addEventListener('mouseleave',function(){this.style.backgroundColor = ''})

// Q 9

var btn = document.querySelector('#q9-btn')

btn.addEventListener('click',function(){
	var msg = document.querySelector('#q9-input')
	var msg1 = document.querySelector('#q9-result')
	msg1.textContent = msg.value})


// Q 10

var btn = document.querySelector('.q10-btn')
console.log(btn)

btn.addEventListener('click',function()
						{
						 var age = document.querySelector('#q10-result')
						var input = document.querySelector('#q10-input')
						 if (input.value < 20) {age.textContent = '20歳未満の方の利用は禁止です。'}
						 else if(input.value > 60){age.textContent = '60歳以上の方の利用は半額です'}
						 else{age.textContent = input.value+'歳です。'}
						}
					)

// Q 11

var btn = document.querySelector('.q11-btn')

btn.addEventListener('click',function()
					{
					  var name_result = document.querySelector('#q11-result-name')
					  var name_input = document.querySelector('#q11-input-name')
					  var age_result = document.querySelector('#q11-result-age')
					  var age_input = document.querySelector('#q11-input-age')

					 if (age_input.value < 20) 
					 	{age_result.textContent = '20歳未満の方の利用は禁止です。'}
					 else {age_result.textContent = age_input.value}

					 if (name_input.value === '')
					 	{name_result.textContent = '名前が空欄です'
						 name_result.style.color = 'red'}
					 else{name_result.textContent = name_input.value
					 	  name_result.style.color = ''}	
					}
					)
// Q 12

var btn = document.querySelector('.q12-btn')

btn.addEventListener('click',function(){
										var btn = document.querySelector('.q12-btn')
										var msg = document.createElement('p')
										var result = document.querySelector('.q12-result')
										msg.textContent = btn.textContent
									    result.appendChild(msg)
									    }
					)
     

// Q 13
// 飛ばしていいです。
var btn = document.querySelector('.q13-btn')

btn.addEventListener('click',function(){
										var msg = document.createElement('li')
										var list = document.querySelector('#q13-box')
										var melon = document.querySelector('#melon')
										msg.textContent = 'リンゴ'
										list.insertBefore(msg, melon)
									    }
					)

// Q 14
var btn = document.querySelector('.q14-btn')

btn.addEventListener('click',function(){
										var chicken = document.querySelector('#chicken')
										chicken.remove()
									   }
					)

// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。



var btn = document.querySelectorAll('.q15-btn')
for (var bt of btn) {

			

bt.addEventListener('click',function final(){
												var link_list = document.querySelector('.q15-link-list')
												var google = document.createElement('a')
												var youtube = document.createElement('a')
												var amazon = document.createElement('a')

												google.href = 'https://google.com'
												google.textContent = 'Google: https://google.com'

												youtube.href = 'https://youtube.com'
												youtube.textContent = 'Youtube: https://youtube.com'

												amazon.href = 'https://amazon.com'
												amazon.textContent = 'Amazon: https://amazon.com'
											

												if (this.textContent === 'Google') 
												 	{link_list.appendChild(google)}
												 else if (this.textContent === 'YouTube')
												 	{link_list.appendChild(youtube)}
												 else if(this.textContent === 'Amazon')
												 	{link_list.appendChild(amazon)}
												 else{link_list.appendChild('')}        

											 })
	 				}
	























