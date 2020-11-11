let i = 0
$('.q-1btn').on('click',function(){
									i++
									if (i >1) {return false}
									else{$('.q-1result').append($(this).text())}
								  }
			   )

let s =0
$('.q-3btn').on('click',function(){	
									s++
									if (s >1) {return false}
									else{$('.q-3result').append($(this).text())}
								  }
			   )
let t =0
$('.q-5choice').on('click',function(){
									t++
									if (t >1) {return false}
									else{$('.q-5result').append($(this).text())}
									}
				)

let x =0
$('.q-7btn').on('click',function(){
									x++
									if (x >1) {return false}
									else{$('.q-7result').append($(this).text())}
									}
				)
let res1 = 0
let res2 = 0
let res3 = 0
let res4 = 0
let res5 = 0
let res6 = 0
let res7 = 0
$('.submit').on('click',function(){
									 res1 = 0
									 res2 = 0
									 res3 = 0
									 res4 = 0
									 res5 = 0
									 res6 = 0
									 res7 = 0
									// Q1
									if ($('.q-1result').text() ==='いらっしゃい')
									 	{res1++}
									 	console.log(res1)
									// Q2
									if ($('.q-2input').val()==='美ら海')
										{res2++}
										console.log(res2)
									// Q3
									if ($('.q-3result').text() ==='「わー」')
									 	{res3++}
									 	console.log(res3)
									// Q4
									if ($('.q-4input').val()==='コーレーグース')
										{res4++}
										console.log(res4)
									// Q5
									if ($('.q-5result').text() ==='C')
									 	{res5++}
									 	console.log(res5)
									// Q6
									if ($('.q-6input').val()==='三線' || $('.q-6input').val()==='さんしん')
										{res6++}
										console.log(res6)
									// Q7
									if ($('.q-7result').text() ==='「我那覇」')
									 	{res7++}
									 	console.log(res7)
									 	console.log(res1+res2+res3+res4+res5+res6+res7)
									 // modalの中の結果
									 if(res1+res2+res3+res4+res5+res6+res7 == 7)
								     {$('.modal-body').text(Math.round((res1+res2+res3+res4+res5+res6+res7)/7*100)+'点です！君は既にうちなーんちゅ!^_^')}
									 if (res1+res2+res3+res4+res5+res6+res7 < 5)
									 {
									  $('.modal-body').text(Math.round((res1+res2+res3+res4+res5+res6+res7)/7*100)+'点です！下記のリンクで今すぐ飛行機を取って帰ってください!')
									  $('.modal-body').append('<a href="https://www.airtrip.jp/air-lp/?source=listing.adwords.airtrip.jp&gclid=CjwKCAiAkan9BRAqEiwAP9X6UYlLloC6PLnjzlT3SjxeMJMqXKVNAiD7ijqQmoZBlA_gOOWBTfrN3BoCPAUQAvD_BwE"><i class="fas fa-plane"></i></a>')
									 }
									 else if (res1+res2+res3+res4+res5+res6+res7 < 7)
									 {$('.modal-body').text(Math.round((res1+res2+res3+res4+res5+res6+res7)/7*100)+'点です！君は立派な沖縄県民になれます!')}
								     　　　
								  }
				)
