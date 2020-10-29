// このファイルに処理を記述する

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
console.log(btn)

btn.addEventListener('click',function(){
											let todo_input = document.querySelector('.todo')
											let todo_list = document.querySelector('#list')
											if (todo_input.value != '')
											{
                 							 // 2.ulの中にliとして表示する
                 							 // 親要素のulを変数に取得
                 							 // 追加予定のliタグを生成
                 							 
                 							 // 生成したliタグの文字、入力された文字(input_text)にする（代入する）
											 let add_list = document.createElement('li')
											 let del = document.createElement('div')
											 let icon = document.createElement('i')
											 // 追加したliにclassを追加
											 add_list.classList.add('add_list')
											 add_list.textContent = todo_input.value
											 icon.classList.add('fas')
											 icon.classList.add('fa-trash-alt')

											 todo_list.appendChild(add_list)
											 add_list.appendChild(icon)
											 icon.addEventListener('click',function()
											 						{let hantei = confirm('本当に消しますか')
											 						 if (hantei === true) {this.parentElement.remove()}
											 						 else {''}
											 						}
											 					  )
											 todo_input.value = ''
											}
										}
                    )

