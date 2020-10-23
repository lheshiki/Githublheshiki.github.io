console.log('----------------練習問題----------------');

console.log('----------------1. 偶数、奇数----------------');
for (var i = 0; i < 10; i++) 
	{
	 if (i % 2 === 0) {console.log(i+' is pair')}
	 else{console.log(i+' is unpair')}
	}
/**
 * 変数iが偶数の場合は偶数です。
 * 変数iが奇数の場合は奇数です。
 * と表示されるプログラムを書いてください。
 * ※条件分岐を使用します。
 * ※偶数は「2で割り切れる(2で割ったあまりが0と表すことができます)」
 */

/*let i = 2;*/

console.log('----------------2. 合格判定----------------');
let English = 65
let Mathematics = 80
if (English >= 60 && Mathematics >= 60 && English+Mathematics >= 140) 
	{
	console.log('Aprooved')
	}
else {console.log('Failed')}
		
/**
 * 英語と数学の点数がそれぞれ60点以上かつ、
 * 合計点が140点以上の場合は、合格、
 * それ以外の場合は、不合格
 * と表示するプログラムを書いてください。
 */


console.log('----------------3. 数を数える----------------');

let numbers = [1,1,3,3,3,3,6]
let res =0

for (number of numbers) 
	{
	if (number === 3) 
	{
	 res++;
	}
	}
   console.log(res)

/**
 * 配列numbersの中に数字の3が何個あるか画面に表示するプログラム
 * を書いてください。
 * ※繰り返し文とif文を使用します。
 */
/*let res = 0;
let numbers = [1, 3, 4, 5, 8, 9, 3, 3];
for (let number of numbers) 
	{if (number == 3) {res++}	
    
    }
    console.log(res)*/

console.log('----------------4. 3倍した数を表示する----------------');
let n = 3
for (var i = 1; i <= 10; i++) 
	{
	  console.log(i*n)
	}
/*let e = 1;
for (e = 1; e <= 10; e++) 
	{console.log(e*3)}

/**
 * 1から10までの数字をそれぞれ3倍した数字を表示するプログラムを書いてください。
 * 3 6 9 ... 30 までが表示されればOKです
 */

console.log('----------------5. FizzBuzz----------------');
for (var i = 1; i <= 100; i++)
	{
	  if (i % 3 === 0 && i % 5 === 0) 
	  	 {console.log(i+' is FizzBuzz')}	
	  else if(i % 3 === 0)
	  	 {console.log(i+' is Fizz')}
	  else if (i % 5 === 0) 
	  	 {console.log(i+' is Buzz')}
	   else
	  	 {console.log(i)}
	}
/**
 * 1から100までの数字を出力するプログラムを書いてください。
 * 但し、
 * 3の倍数の場合はFizz
 * 5の倍数の場合はBuzz
 * 3と5の両方の倍数の場合はFizzBuzz
 * と表示するようにしてください。
 */

console.log('----------------6.九九----------------');

for (n = 1; n <= 9; n++) 
	{ 	
	for (i = 1; i <= 9; i++)
	{ console.log(i*n)	 
	}
	}
/**
 * 九九を表示するプログラムを書いてください。
 */

console.log('----------------7. 繰り返しの中断、スキップ----------------');
for (n = 1; n <= 9; n++) 
	{ 	
	for (i = 1; i <= 9; i++)
	{ 
	 if (i*n <= 30) 
	 {
	  console.log(i*n)
	 }
	 else{continue}
	}
	}

/**
 * 九九の中で答えが30未満の数値だけ表示してください。
 */


// チャレンジ問題
console.log('----------------1. 女湯問題----------------');

let customer = {gender:'Other', age:9}
	if (customer['gender'] === 'female'|| customer['age'] <= 8)
		{console.log('Pass')}
	else {console.log('Not pass')}
/**
 * 顧客の年齢と性別から顧客が女湯に入れるか判断するプログラムを書いてください。
 * 顧客を表す変数customerを定義してください
 * 変数customerにはkey ageと、key genderをもつ連想配列を代入してください。
 * ageには任意の数字を入れてください。
 * genderは male, female, otherのいずれかにしてください。
 * 女湯に入れる場合は「入れます」、入れない場合は「入れない」と表示してください。
 */

console.log('----------------2. 素数を表示するプログラム----------------');

let rep=0

for (var s = 1;s <= 20;s++) 
	{
	  for (var i = 1; i <= s; i++) 
		{
		 if (s % i === 0) {rep++}
		}
		 console.log(rep);
		 // if (rep === 2) {console.log()} 
    }


// for (let i = 2; i < 100; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j < i) {
//       break;
//     } 

//     if (i === j) {
//       console.log(i);
//     }
//   }
// }
/**
 * 100以下の素数を表示してください。
 * 1は素数には含みません。
 * 素数とは1とその数以外では割り切れない数です。
 * 言い方をかえると約数が2つしかない数です。
 */










