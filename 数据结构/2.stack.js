function Stack() { 
  this.dataStore = []; 
  this.top = 0; 
  this.push = push; 
  this.pop = pop; 
  this.peek = peek; 
  this.clear = clear; 
  this.length = length; 
} 
function push(element) { 
  this.dataStore[this.top++] = element; 
} 
function peek() { 
  return this.dataStore[this.top - 1] 
} 
function pop() { 
  return this.dataStore[--this.top]; // 每执行一次，它的数值就会-1
} 
function clear() { 
  this.top = 0; 
} 
function length() { 
  return this.top; 
}

// 利用栈求一个数的2进制和8进制
function mulBase(num, base) {    
  var s = new Stack();    
  do { 
    s.push(num % base);   // [0,0,0,0,0,1]   
    num = Math.floor(num /= base);    //16,8,4,2,1,
  } while (num > 0);    
  var converted = "";    
  while (s.length() > 0) {       
    converted += s.pop();    
  }    
  return converted; 
}
console.log(mulBase(32,2)) //100000
console.log(mulBase(125,8)) //175

// 利用栈判断是否回文（一个单词、短语或数字,从前往后写和从后往前写都是一样的。比如,单词“dad”）
function isPalindrome(word){
  const s = new Stack()
  for(let i = 0;i<word.length;i++){
    s.push(word[i])
  }
  let newWord = ''
  
  while(s.length()>0){
    console.log(s.length())
    newWord+=s.pop()
  }
  console.log(newWord)
  if(word === newWord){
    return true
  }else{
    return false
  }
}

console.log(isPalindrome('racecar')) // true