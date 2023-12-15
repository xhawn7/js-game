/* 
自己的想法
1. result
2. 圆球在一个方块里游行
3. 矩形左右移动
*/

//  // 圆点自动滚动
// const ball = document.querySelector('.ball')
// // randomNum1 = Math.ceil(Math.random()*10)
// // randomNum2 = Math.ceil(Math.random()*10)
// let btm = 0
// let lf = 0
// middleCondition = 0
// lfCondition = 0
// const moveBall = setInterval(()=>{
//   if(middleCondition<280){
//     btm+=randomNum1
//     middleCondition+=randomNum1
//   }else if(btm==0 ){
//     middleCondition=0
//   }else{
//     btm-=randomNum1
//   }

//   if(lfCondition<580){
//     lf+=randomNum1
//     lfCondition+=randomNum1
//   }else if(lf==0 ){
//     lfCondition=0
//   }else{
//     lf-=randomNum1
//   }
//   ball.style.bottom  = `${btm}px`
//   ball.style.left = `${lf}px`
// },20)

// 操作蓝brick
// const brick = document.querySelector('.brick')
// let brickLeft
// document.onkeydown = function(e) {
//   switch(e.key){
//     case 'ArrowLeft':    
//       brickLeft = brickLeft===0?0:brick.offsetLeft-20
//       break;
//     case 'ArrowRight':
//       brickLeft = brickLeft===500?500:brick.offsetLeft+20
//       break;
//   }
//   brick.style.left = `${brickLeft}px`
// };

// const purpleBrickWrapper = document.querySelector('.purpleBrickWrapper')

// for(let i = 0;i<15;i++){
//   const purpleBrick = document.createElement('div')
//   purpleBrick.setAttribute('id',i)
//   purpleBrick.setAttribute('class','purpleBrick')
//   purpleBrick.addEventListener('click',()=>{
//     const purpleBricks = document.querySelectorAll('.purpleBrick')
//     console.log(purpleBricks[i].offsetLeft)
//     console.log(purpleBricks[i].offsetTop)
//   })
//   purpleBrickWrapper.appendChild(purpleBrick)
// }

// 解析的想法

/*
  1. 设置球，2种brick的坐标
  2. 改变方向
*/

// const ballPosition = [100,40]
// // 这里的方向值要小于ball本身的长宽，否则会有跳出去的bug
// let xDirection = -2
// let yDirection = 2
// const userBrickPosition = [250,20]
// const ball = document.querySelector('.ball')
// const userBrick = document.querySelector('.userBrick')
// const wrapper = document.querySelector('.wrapper')
// const drawBall = () => {
//   ball.style.left = `${ballPosition[0]}px`
//   ball.style.bottom = `${ballPosition[1]}px`
// }
// const drawUserBrick = () => {
//   userBrick.style.left = `${userBrickPosition[0]}px`
//   userBrick.style.bottom = `${userBrickPosition[1]}px`
// }
// class Bricks{
//   constructor(x,y){
//     this.left = x
//     this.top = y
//   }
// }

// const bricksList = [
//   new Bricks(0,0),
//   new Bricks(115,0),
//   new Bricks(230,0),
//   new Bricks(345,0),
//   new Bricks(460,0),
//   new Bricks(0,35),
//   new Bricks(115,35),
//   new Bricks(230,35),
//   new Bricks(345,35),
//   new Bricks(460,35),
//   new Bricks(0,70),
//   new Bricks(115,70),
//   new Bricks(230,70),
//   new Bricks(345,70),
//   new Bricks(460,70),
// ]

// const brickWrapper = document.createElement('div')
// brickWrapper.classList.add('purpleBrick')
// wrapper.appendChild(brickWrapper)
// for(let i = 0;i<bricksList.length;i++){
//   const brick = document.createElement('div')
//   brick.style.left = `${bricksList[i].left}px`
//   brick.style.top = `${bricksList[i].top}px`
//   brickWrapper.appendChild(brick)
// }


// document.onkeydown = function(e){
//   switch(e.key){
//     case 'ArrowLeft':    
//       userBrickPosition[0] = userBrickPosition[0]<=20?0:userBrickPosition[0]-20
//       break;
//     case 'ArrowRight':
//       userBrickPosition[0] = userBrickPosition[0]>=480?500:userBrickPosition[0]+20
//       break;
//   }
//   drawUserBrick()
// }
// drawBall()
// drawUserBrick()
// const moveBall = () => {
//   ballPosition[0]+=xDirection
//   ballPosition[1]+=yDirection
//   drawBall()
//   checkIsHit()
// }

// const moveBallInterval = setInterval(moveBall,20)

// const checkIsHit = () => {
//   // 边界：x:600-20;y:300-20

//   if(ballPosition[0]<=0 || ballPosition[0]>=580||ballPosition[1]<=0||ballPosition[1]>=280){
//     changeDirection()
//     return
//   }

//   // 用户砖
//   // if((ballPosition[1]>userBrickPosition[1]&&ballPosition[1]<(userBrickPosition[1]+20) )
//   // &&(ballPosition[0]>userBrickPosition[0]&&ballPosition[0]<(userBrickPosition[0]+100))){
//     if((ballPosition[1]>=18&&ballPosition[1]<=38)&&(ballPosition[0]>userBrickPosition[0]&&ballPosition[0]<(userBrickPosition[0]+100))){
//     changeDirection()
//     return
//   }

//   if(ballPosition[1]<=2){
//     clearInterval(moveBallInterval)
//     return
//   }

// }



// // TODO:这个方向需要再思考
// const changeDirection = () => {
//   if (xDirection === 2 && yDirection === 2) {
//     yDirection = -2
//     return
//   }
//   if (xDirection === 2 && yDirection === -2) {
//     xDirection = -2
//     return
//   }
//   if (xDirection === -2 && yDirection === -2) {
//     yDirection = 2
//     return
//   }
//   if (xDirection === -2 && yDirection === 2) {
//     xDirection = 2
//     return
//   }
// }
const ball = document.querySelector('.ball')
const userBrick = document.querySelector('.userBrick')
class Direction{
  constructor(x,y){
    this.left = x;
    this.bottom = y
  }
}

// 关于球
const ballPosition = new Direction(20,100)
const ballDirection = new Direction(10,-10)
function drawBall () {
  ball.style.left = `${ballPosition.left}px`
  ball.style.bottom = `${ballPosition.bottom}px`
}
drawBall()

function moveBall() {
  ballPosition.left+=ballDirection.left
  ballPosition.bottom+=ballDirection.bottom
  drawBall()
  changeDirection()
}
setInterval(moveBall,100)

function changeDirection(){
  if(ballPosition.bottom<10 ){
    ballDirection.bottom = 10
  }
  else if (ballPosition.bottom>272){
    ballDirection.bottom = -10
  }
  else if(ballPosition.left>532){
    ballDirection.left = -10
  }
  else if(ballPosition.left<10){
    ballDirection.left = 10
  }

  else if(ballPosition.bottom == 40 && ballPosition.left>userBrickPosition.left-20 && ballPosition.left<userBrickPosition.left+80){
    ballDirection.bottom = 10
  }
}

// 关于用户砖头
const userBrickPosition = new Direction(0,20)

function drawBrick () {
  userBrick.style.left = `${userBrickPosition.left}px`
  userBrick.style.bottom = `${userBrickPosition.bottom}px`
}
drawBrick()

document.onkeydown = function(e){
  switch(e.key){
    case 'ArrowLeft':
      userBrickPosition.left = userBrickPosition.left <= 0 ? 0 :userBrickPosition.left-10
      break;
    case 'ArrowRight':
      userBrickPosition.left = userBrickPosition.left >= 460 ? 462 :userBrickPosition.left+10
      break;
  }
  drawBrick()
}

// brickWall
const brickWallWrapper = document.querySelector('.brickWallWrapper')
const bricksWall = [
  new Direction(10,20),
  new Direction(120,20),
  new Direction(230,20),
  new Direction(340,20),
  new Direction(450,20),
  new Direction(10,50),
  new Direction(120,50),
  new Direction(230,50),
  new Direction(340,50),
  new Direction(450,50),
  new Direction(10,80),
  new Direction(120,80),
  new Direction(230,80),
  new Direction(340,80),
  new Direction(450,80),
]

function drawBrickWall(){
  bricksWall.forEach(item=>{
    const div = document.createElement('div')
    div.style.left = `${item.left}px`
    div.style.top = `${item.bottom}px`
    brickWallWrapper.appendChild(div)
  })
}
