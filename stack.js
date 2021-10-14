class Node {
  constructor(data){
  this.data = data;
  this.previous = null;
}
}

class Stack {
constructor(maxLength = 10){
  this.maxLength = maxLength;
  if(!Number.isSafeInteger(maxLength)){
    throw new Error('argument is not Integer')
  }
  this.top = null;
  this.size = 0;
}

push(elem) {
  if(this.size === this.maxLength){
    throw new Error('Stack overflowed')
  }
  let node = new Node(elem);
  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
}

pop() {
  if(this.size === 0){
    throw new Error('Stack is already empty')
  }
  let popped = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return popped.data;
}

peek() {
  if(this.size = 0){
    return null;
  }
  return this.top.data;
}

isEmpty() {
  let isEmpty;
  if(this.size > 0){
    isEmpty = false
  } else {
    isEmpty = true
  }
  return isEmpty;
}

toArray() {
  let arr = [];
  getProp(this);
  function getProp(obj) {
    for(let prop in obj) {
        if(typeof(obj[prop]) === 'object') {
            getProp(obj[prop]);
        } else if (prop === 'data'){
            arr.push(obj[prop]);
        }
    }
  }
  return arr.reverse();
}

static fromIterable(iterable) {
  if(!iterable || iterable[Symbol.iterator] === undefined){
    throw new Error('My Error fromIterable')
  }
  let newStack = new Stack(iterable.length);
  for(let item of iterable){
    newStack.push(item)
  }
  return newStack;
}
}

module.exports = { Stack }