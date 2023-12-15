/**
 * 敌人会自己移动，被敌人碰到就会显示game over
 * 点击arrowLeft arrowRight左右移动，
 * 点击arrowUp 发动攻击
 */
const result = document.querySelector('.result')
const grid = document.querySelector('.grid')

function createForm(totalListNum, row, col) {
  const totalList = [...Array(totalListNum)].map((_, index) => index)
  const gridList = [...Array(row)].map((_, index) => {
    return totalList.slice(index * col, (index + 1) * col)
  })
  return gridList
}

// 1.初始界面
const totalList = [...Array(256)]
const gridList = createForm(256, 16, 16)
totalList.forEach((_, index) => {
  const div = document.createElement('div')
  grid.appendChild(div)
})

// 2. 敌人部分
class Square {
  constructor(row, col) {
    this.row = row
    this.col = col
  }
}
const enemyList = createForm(30, 3, 10)
const enemy = []
enemyList.forEach((item, index) => {
  item.forEach((_, childIndex) => {
    enemy.push(new Square(index, childIndex))
  })
})

function drawEnemy() {
  enemy.forEach((item) => {
    const currentEnemy = grid.children[gridList[item.row][item.col]]
    currentEnemy?.classList.add('enemy')
  })
}

drawEnemy()

let moveCount = 0
function moveEnemy() {
  enemy.forEach((item) => {
    const currentEnemy = grid.children[gridList[item.row][item.col]]
    if (currentEnemy?.classList.contains('enemy')) {
      currentEnemy?.classList.remove('enemy')
    }
  })
  // 注意forEach(item,index,arr)方法如果item为对象修改后会直接改变原数组，如果是值要改变原数组可以用第三个参数arr,arr[index]
  // 右转
  if (moveCount < 6) {
    enemy.forEach((item) => {
      item.col++
    })
    moveCount++
  }
  // 左转
  else if (moveCount == 6) {
    enemy.forEach(item => {
      item.row++
    })
    moveCount++
  } 
  // 下转
  else if (moveCount > 6 && moveCount <= 12) {
    enemy.forEach(item => {
      item.col--
    })
    moveCount++
  } 
  else {
    enemy.forEach(item => {
      item.row++
    })
    moveCount = 0
  }
  drawEnemy()
}

enemyTimer = setInterval(moveEnemy, 200)

function checkWin(){
  let enemyLocation 
  enemy.forEach(item=>{
    enemyLocation = gridList[item.row][item.col]
    if(enemyLocation>240){
      clearInterval(enemyTimer)
      enemyTimer = null
    }
    if(grid.children[enemyLocation].classList.contains('bomb')){
      grid.children[enemyLocation].classList.remove('enemy')
    }
  })
}
checkWinTimer = setInterval(checkWin,100)

// 3. user部分
let userSquare = new Square(14, 7)
let shootSquare = new Square(14, 7)
let userIndex 

function drawUser(){
  if(grid.children[userIndex]?.classList.contains('user')){
    grid.children[userIndex]?.classList.remove('user')
  }
  userIndex = gridList[userSquare.row][userSquare.col]
  grid.children[userIndex].classList.add('user')
}
drawUser()

let shootInterval

function drawInitialShoot() {
  shootIndex = gridList[shootSquare.row][shootSquare.col]
  grid.children[shootIndex]?.classList.add('bomb')
}

function drawShoot(){
  console.log(123)
  if(grid.children[shootIndex]?.classList.contains('bomb')){
    grid.children[shootIndex]?.classList.remove('bomb')
  }
  shootSquare.col = userSquare.col
  shootSquare.row = shootSquare.row<=0 ? userSquare.row : shootSquare.row-1
  
  if(shootSquare.row == 0){
    clearInterval(shootInterval)
    shootInterval = null
  }
  drawInitialShoot()
  // grid.children[shootIndex]?.classList.add('bomb')
}
function shoot(e){
  switch(e.key){
    case 'ArrowLeft':
      userSquare.col = userSquare.col === 0 ? 0 : userSquare.col - 1
      drawUser()
      break;
    case 'ArrowRight':
      userSquare.col = userSquare.col === 15 ? 15 : userSquare.col + 1
      drawUser()
      break;
    case 'ArrowUp':
      // drawShoot()
      drawInitialShoot()
      shootInterval = setInterval(drawShoot,100)
      break;
  }
}
document.addEventListener('keydown',shoot)
