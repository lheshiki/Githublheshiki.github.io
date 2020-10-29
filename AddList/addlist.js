var btn = document.querySelector('.btn1')
console.log(btn)

btn.addEventListener('click',function(){
										var todo_input = document.querySelector('#todo')
										console.log(todo_input.value)
										var todo_list = document.querySelector('#list')
										console.log(todo_list)
										var add_list = document.createElement('li')
										add_list.textContent = todo_input.value
										console.log(add_list)
										todo_list.appendChild(add_list)
										}
                    )