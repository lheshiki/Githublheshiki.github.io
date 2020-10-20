
console.log('---------「xはyより大きい。」---------')
/*11. 変数 x、y にそれぞれ任意の数値を代入し、x が y より大きい（超過）場合に、
「xはyより大きい。」という文を表示するプログラムを作成してください。*/

let x = 7
let y = 5

if (x > y) {console.log('X is bigger than Y')}
else {console.log('Y is bigger than X')}

console.log('---------x が ｙ 以上の場合には「xはy以上, x が y より小さい（未満）場合には「xはyより小さい」と表示するプログラムを作成してください-------------')
let m = 2
let n = 5
if (m > n) {console.log('X is bigger than Y')}
else {console.log('X is smaller than Y')}



console.log('---------「xとyは等しい」と表示するプログラム---------')
let a = 2
let b = 2
if (a > b) {console.log('X is bigger than Y')}
else if (a === b) {console.log('X is same as Y')}


console.log('---------偶数か奇数かを判定するプログラム---------')
let c = 2
if (c % 2 === 0) {console.log(c+' is pair')}


console.log('---------3の倍数か5の倍数かを判定するプログラム---------')

let d = 30
if (d % 3 === 0 && d % 5 === 0) {console.log('FIzzBuzz')}
else if (d % 3 === 0) {console.log('Fizz')}
else if (d % 5 === 0) {console.log('Buzz')}
else {console.log('None')}


console.log('---------10以上かつ20以下かを判定するプログラム---------')
 let e = 9
 if (e >= 10 && e <= 20) {console.log('Between 10 and 20')}
 else {console.log('Other')}


console.log('---------100以上または10以下かを判定するプログラム---------')
let f = 98
if (f <=10 || f >= 100) {console.log('It is smaller than 10 or bigger than 100')}
else{console.log('Others')}


console.log('---------日本語」、「英語」または「セブアノ語」を代入し、以下の表通り出力するプログラム---------')
let g = 'Portuguese'

if (g === 'Japanese') {console.log('ありがとう')}
else if (g === 'English') {console.log('thank you')}
else if (g === 'Sebuano') {console.log('salamat')}
else {console.log('Others')}

console.log('---------「男」または「女」を代入し、以下の表通り出力するプログラム---------')

let h = 'おかま'
switch(h) {
		case '男':
			console.log('male');
			break;
		case '女':
			console.log('female');
			break;
		default:
			console.log('Others');
			break;	
		  }


console.log('---------その月を英語で出力するプログラム---------')
let month_list = ['Jan','feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

for (var i = 0; i < 12; i++) 
	{
	 console.log(month_list[i])
	}

















