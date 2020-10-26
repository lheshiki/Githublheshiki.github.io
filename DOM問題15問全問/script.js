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
var msg = document.querySelector('#q9-input')
var msg1 = document.querySelector('#q9-result')
var btn = document.querySelector('#q9-btn')
console.log(msg)
console.log(msg1)
console.log(btn)

btn.addEventListener('click',function(){msg1.textContent = msg.value})


// Q 10
var age = document.querySelector('#q10-result')
var input = document.querySelector('#q10-input')
var btn = document.querySelector('.q10-btn')
console.log(age)
console.log(input)
console.log(btn)

btn.addEventListener('click',function()
						{if (input.value < 20) {age.textContent = '20歳未満の方の利用は禁止です。'}
						 else{age.textContent = input.value+'歳です。'}
						}
					)

// Q 11
var name_result = document.querySelector('#q11-result-name')
var name_input = document.querySelector('#q11-input-name')
var age_result = document.querySelector('#q11-result-age')
var age_input = document.querySelector('#q11-input-age')
var btn = document.querySelector('.q11-btn')
console.log(name_result)
console.log(name_input)
console.log(age_result)
console.log(age_input)
console.log(btn)

btn.addEventListener('click',function()
					{
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


// Q 13
// 飛ばしていいです。


// Q 14


// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。

