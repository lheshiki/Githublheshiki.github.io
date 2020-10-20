console.log('---------------「hoge」という文字を10回出力するプログラム---------------')

for (var i = 1; i <= 10; i++) 
	{
	 console.log('hoge')
	}

console.log('---------------1から10までの数字を出力するプログラム---------------')

for (var i = 1; i <= 10; i++) 
	{
	console.log(i)
	}

console.log('---------------九九、二の段を表示するプログラム---------------')

let x = 2
for (var i = 1; i <= 9; i++) 
	{
	 console.log(i*x)
	}

console.log('---------------1から100までの偶数を出力するプログラム---------------')
for (var i = 1; i <= 100; i++) 
	{
	 if (i % 2 === 0) {console.log(i)}
	 else{continue}
	}

console.log('---------------1から100までの数字を出力するプログラム、ただし、数値が奇数の場合は「奇数です」と出力---------------')

for (var i = 1; i <= 100; i++) 
	{
	if (i % 2 != 0) {console.log(i+' is inpair')}
	else {console.log(i)}
	}

console.log('---------------1から100までの3の倍数を出力するプログラム---------------')

for (var i = 1; i <= 100; i++) 
	{
	if (i % 3 === 0) {console.log(i)}
	else{continue}
	}

console.log('---------------1から100までの5の倍数を出力するプログラム---------------')

for (var i = 1; i <= 100; i++) 
	{
	if (i % 5 === 0) {console.log(i)}
	else{continue}
	}

console.log('---------------1から100までの3の倍数かつ5の倍数を出力するプログラム---------------')

for (var i = 1; i <= 100; i++) 
	{
	if (i % 3 === 0 && i % 5 === 0) {console.log(i)}
	else{continue}
	}

console.log('---------------3の倍数の場合は数の代わりに｢Fizz｣と出力するプログラム---------------')

for (var i = 1; i <= 100; i++) 
	{
	if (i % 3 === 0) {console.log(i+' Fizz')}
	else{console.log(i)}
	}

console.log('---------------3の倍数の場合は数の代わりに｢Fizz｣、5の倍数のときは｢Buzz｣、3と5両方の倍数の場合には｢FizzBuzz｣と出力---------------')

for (var i = 1; i < 100; i++) 
	{
	if (i % 3 === 0 && i % 5 === 0) {console.log(i+' FizzBuzz')}
	else if (i % 3 === 0) {console.log(i+' Fizz')}
	else if (i % 5 === 0) {console.log(i+' Buzz')}
	else{console.log(i)}
	}





