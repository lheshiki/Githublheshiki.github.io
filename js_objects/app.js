console.log('--------関数---------')
// 関数の書き方
// function 関数名 () {処理}

function myalert()
				{
				 // alert('自作関数からhello')
				 // アラートを表示した後にも自由に処理を追加できる
				 let hantei = confirm('このボタン押してもいいですか？')
				 if (hantei === true) 
				 	{console.log('大丈夫')}
				 else{console.log('やり直し')}

				 let messageSpan = document.getElementById('message');
				 messageSpan.textContent =　'替わりました';
				 if (hantei === true) 
				 	{messageSpan.textContent =　'大丈夫';
					 messageSpan.style.color = 'green'}
				 else{messageSpan.textContent =　'やり直し';
					  messageSpan.style.fontSize = '100px'}


				}

console.log('-----------------関数(引数付き)------------------')				
// 関数の書き方
// function 関数名 (引数１、引数２、....) {処理}
// 関数とは複数の処理を一つにまとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// alert(表示したい文字)　この場合、表示したい文字が引数に当たる

function myalert2(displayMessage){alert(displayMessage);}

function printHoge(msg){console.log(msg)}

function printNum(number){
	console.log(number)}

printNum(98)


console.log('-----------------kuku------------------')
function printkuku (num)
					{
						for (var i = 1; i < 10; i++) 
						{
						  console.log(num * i)
						} 
					}
printkuku(9)


console.log('-----------------printKakezan------------------')
function printkakezan(num1,num2)
{console.log(num1*num2)}

printkakezan(7,5)

console.log('-----------------printIsEven------------------')
function printIsEven(num3)
		 {if (num3 % 2 === 0) 
		  {console.log('Even')}
		  else{console.log('odd')}
		 }

printIsEven(18)

console.log('-----------------printMessage------------------')
function printMessage(Letter,number)
		{
		  for (var i = 0; i < number; i++) 
		  {
		  	console.log(Letter)
		  }
		}

printMessage('Luis',2)


console.log('-----------------printMaxNum------------------')

function printMaxNum (num1,num2)
		{if (num1 > num2) 
			{console.log(num1)}
		 else{console.log(num2)}
		}

printMaxNum(9,2)

console.log('-----------------getSquared------------------')

// リターンは戻り値、返り値は「return 値;」の形で、実行した側に戻される値
// 引数と逆の方向に値を送る

function getSquared(num1)
		{
			return num1 * num1
		}
		var result  = getSquared(8)
		console.log(result/2)


console.log('-----------------createSelfIntroductionText------------------')

function createSelfIntroductionText(moji)
		{console.log('My name is '+moji)}

createSelfIntroductionText('Luis')		

console.log('-----------------isEvenNumber------------------')

function isEvenNumber(number)
		{if (number % 2 === 0) 
		 { return true}
		 else{return false}
		}
var even = isEvenNumber(4)
console.log(even)


isEvenNumber(3)

console.log('-----------------SeedKun------------------')

function isSeedKun(moji)
		{if (moji === 'SeedKun')
		 { return true}
		 else{return false}
		}

var result = isSeedKun('SeedKun')
console.log(result)












