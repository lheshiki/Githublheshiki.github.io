// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。
function answer(){

// Q 1
var msg = document.getElementById('q1-text')
console.log(msg.textContent)

// Q 2
var msg = document.getElementById('q2-text')
msg.textContent = 'I am looking forward the BBQ'

// Q 3
var msg = document.getElementById('q3-text')
msg.style.color = 'red'

// Q 4 (難)
// 「for of」を使います。
// var msg = document.getElementsByClassName('q4-text')
// console.log(msg)
// for (var i = 0; i < msg.length; i++)
// 	{
// 	msg[i].style.color = 'green'
// 	}
var msg = document.querySelectorAll('.q4-text')
for (let msg1 of msg)
		{msg1.style.color = 'purple'   }

// Q 5
// var msg = document.getElementsByClassName('q5-text')
// console.log(msg)

// for (var i = 0; i < msg.length; i++) 
// 	{
// 	msg[i].style.backgroundColor = 'blue'
// 	}
var msg = document.querySelectorAll('.q5-text')
for (var msg2 of msg)
	{msg2.style.backgroundColor = 'red'}

}