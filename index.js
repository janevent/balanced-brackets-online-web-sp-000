function isBalanced(string){
  let brackets = '(){}[]'
  let stack = []
  string.each(e){
    bracketIndex = brackets.indexOf(e)
    if(bracketIndex % 2 === 0){
      stack.push(bracketIndex+1)
    }else{
      if(stack.pop() !== bracketIndex){
        return false
      }
    }
  }
  return stack.length === 0
}