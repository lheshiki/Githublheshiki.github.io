// このファイルに処理を記述する
// let data = ['英単語20個覚える','話題の絵画を見にいく','お箸を買う']
let data;
// もしデータが保存されていたら、取り出す、そうでなければ空っぽの配列を代入しておく
if (localStorage.getItem('todoList'))
   {data = JSON.parse(localStorage.getItem('todoList'))} //データを取り出してdataに代入
else{data = []}

// console.log(data)
// 保存されたデータを画面に表示する

// liタグを追加する
for (var i = 0; i < data.length; i++)
	{
	 add_li_tag(data[i])
	}





// モックの、本来は動的に作る部分をコメントアウトしておく

// Addボタンの処理

// Addボタンが押されたら
// 入力文字のチェック
// 空文字なら何もしない
// 何か入力されたら、ulの中にliとして表示する
// 表示するliには、右側にdeleteボタンが表示されているようにする
// 追加されるliはどんどん下に追加されていく

// Addボタン要素の取得

let btn = document.querySelector('.btn1')
btn.addEventListener('click',function(){
											let todo_input = document.querySelector('.todo')
											// let todo_list = document.querySelector('#list')
											if (todo_input.value != '')
											{
											 // liタグを追加する関数
											 add_li_tag(todo_input.value)
											 
											 // これでdataの配列に追加してる
											 data.push(todo_input.value)
											 // 配列をローカルストレージに保存
											 // localStorage.setItem('キー','値');
											 localStorage.setItem('todoList',JSON.stringify(data))
											 

											 // 4.入力欄を空っぽに保つ
											 todo_input.value = ''
											 }
										}
                    )

// 追加するliタグの生成する関数
// task_text 仕事をしたい時に必要な文字列（タスクを表す文字列。保存されている文字だったり、入力されてる文字だったり）
function add_li_tag(task_text){		
							　　// liタグを追加する処理を書きますよ　
							　　let todo_input = document.querySelector('.todo')
								let todo_list = document.querySelector('#list')
								let add_list = document.createElement('li')
											 let del = document.createElement('div')
											 let icon = document.createElement('i')
											 // 追加したliにclassを追加
											 add_list.classList.add('add_list')
											 
											 // 指定された引数の文字にする
											 add_list.textContent = task_text
											 icon.classList.add('fas')
											 icon.classList.add('fa-trash-alt')

											 todo_list.appendChild(add_list)
											 add_list.appendChild(icon)
											 icon.addEventListener('click',function()
											 						{let hantei = confirm('本当に消しますか')
											 						 if (hantei === true)
											 						 	{
											 						 	 this.parentElement.remove()

											 						 	 // 配列から削除
											 						 	 // data.splice 指定した要素からn個分のデータを削除
											 						 	 // data.indexOf 指定した文字が何番目にあるのかを検索する
											 						 	 // 配列data1番目から1データを消す
											 						 	 // data.splice('基準','消すデータの数')
											 						 	 // data.indexOf('ホノルルマラソンの準備をする')　→ ０番目に入ってたら、数字が0が返ってくる
											 						 	 
											 						 	 data.splice(data.indexOf(this.parentElement.textContent),1)
											 						 	 

											 						 	 // 削除済の配列を全体的にローカルストレージに上履き保存
											 						 	 localStorage.setItem('todoList',JSON.stringify(data))

											 						 	}
											 						 else {''}
											 						}
											 					  )
							　}

let btn2 = document.querySelector('#submit')
btn2.addEventListener('click',function(){ let programming_rules = document.querySelectorAll('.add_list')
										  let res = 0
										  let result_list = document.querySelector('#result')
										  let result = document.createElement('p')
										  result.classList.add('result')

										  
										  for (let rule of programming_rules)
										  	  {
										  		if (
										  			 rule.textContent === '目標を見据えるべし' ||
										  			 rule.textContent === 'ググるべし' ||
										  			 rule.textContent === 'ひたすら書くべし' ||
										  			 rule.textContent === '自分のコードを疑うべし' ||
										  			 rule.textContent === '全てを楽しむべし' ||
										  			 rule.textContent === '短気、傲慢、怠惰であるべし' ||
										  			 rule.textContent === '仲間、講師、時間を有効活用すべし'
										  		   )
										  		   {res++}
										  		else{rule.style.color ='red'}
										  	  } 
										  	  	

										  	  	if (res < 5)
										  	  	   {										  	  	   
										  	  	   	result.textContent = '残念！'+Math.round(res/7*100)+'点で不合格ですので出直してください！'
										  	  	   }
										  	  	else if (res === 5) {result.textContent = 'あなたの点数は'+Math.round(res/7*100)+ '点でギリ合格です！復習が大事！'}
										  	  	else{										  	  		 
										  	  		 result.textContent = 'あなたの点数は'+Math.round(res/7*100)+ '点で合格です！初心を忘れずべからず！^_^'
										  	  		}
										 		if (programming_rules.length>7)
												  	 {let notification = alert('プログラミングには７ヶ条しかないよ！'+(programming_rules.length-7)+'個余裕に書いてます')
												  	  result.remove()
												  	 }
												  else{let results = document.querySelectorAll('.result')
												 		if (results.length >=1) {result.remove()}
												 		else{result_list.appendChild(result)}}
										 		
										}
					  )






