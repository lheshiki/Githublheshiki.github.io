
let btn = document.querySelector('#submit')
btn.addEventListener('click',function()
					  {
					  	let res = 0
					  	let link_parent = document.querySelector('#link_div')
					  	let icon_parent = document.querySelector('#icon_div')
					  	let link = document.createElement('a')
					  	link.classList.add('results')
					  	let icon = document.createElement('i')
					  	

					  	let input_all = document.querySelectorAll('.input')


					  	for (let input of input_all)
					  	{
					  	 if (
					  	 	 input.value === 'moon' ||
					  	 	 input.value === 'afraid' ||
					  	 	 input.value === 'stand' ||
					  	 	 input.value === 'darling' ||
					  	 	 input.value === 'sky' ||
					  	 	 input.value === 'tumble' ||
					  	 	 input.value === 'mountains' ||
					  	 	 input.value === 'crumble' ||
					  	 	 input.value === "I won't cry" ||
					  	 	 input.value === 'just as long as' ||
					  	 	 input.value === 'whenever you are in trouble' ||
					  	 	 input.value === 'afraid'
					  	 	 )
					  		{res++}
					  	  else{input.style.color = 'red'}
					  	} 
					        if (res >= 6 )
					  		{
					  		 link.classList.add('congrats')
					  		 link.textContent = 'Congratulations you passed! Click here and go see the lyrics in Japanese!'
					  		 link.href = 'http://sate-konokyokuwa.blog.jp/2019-01-30.html'
					  		 icon.classList.add('fas')
					  		 icon.classList.add('fa-guitar')
					  		 icon.classList.add('fa-spin')
					  		}
					  	  else{
					  	  		link.classList.add('Sorry')
					  	  		console.log(link)
					  	  		link.textContent = 'Sorry! you missed a lot of words... please try again!'
					  	  		icon.classList.add('fas')
					  	  		icon.classList.add('fa-poo')
					  	  	  }
					  	 
					  	  let result_count = document.querySelectorAll('.results')
					  	  if (result_count.length >=1)
					  	  	 {
					  	  	  link.remove()
					  	  	  icon.remove()
					  	  	 }
					  	  else{
					  	  	   link_parent.appendChild(link)
					 	  	   icon_parent.appendChild(icon)
					 	  	  }
					   }

					)