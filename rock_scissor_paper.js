const choices = ['scissor','rock','paper']
const btns = document.querySelector('#btns')
const computerChoice = document.querySelector('#computer_choice')
const userChoice = document.querySelector('#user_choice')
const result = document.querySelector('#result')

const getResult = (computer,user) => {
  let result = ''
  const draw_condition = computer == user
  const user_win_condition = ( computer == choices[0] && user == choices[1]) ||(computer == choices[1] && user == choices[2]) || (computer == choices[2] && user == choices[0])
  if(draw_condition){
    result = '打平手了'
  }else if (user_win_condition){
    result = '你赢了'
  }else{
    result = '电脑赢了'
  }
  return result
}

const clickBtn = (e) =>{
  computerChoice.innerHTML = choices[Math.floor(Math.random()*(choices.length))]
  userChoice.innerHTML = e.target.innerHTML
  result.innerHTML = getResult(computerChoice.innerHTML,e.target.innerHTML)
}

choices.forEach(choice=>{
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click',clickBtn)
  btns.appendChild(button)
})
