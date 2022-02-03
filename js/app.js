const textBox = document.querySelector('#text-box')
const button = document.querySelector('#submit-button')
const list =  document.querySelector('#todo-list')
const reset = document.querySelector('#reset')


button.addEventListener('click', function(act){
  const myList = document.createElement('li')
  const inp = document.querySelector('input')
  myList.textContent = inp.value
  if(inp.value !== "") {
    document.querySelector('ul').appendChild(myList)
    inp.value = ""
    console.log(myList)
  }
})

reset.addEventListener('click', function(clear){
  document.getElementById('todo-list').innerHTML =  ""
})

list.addEventListener("click", function (bye) {
  bye.target.closest("li").remove();
  });
