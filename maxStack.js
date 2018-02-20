class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item) {
    this.items.push(item);
  }
  
  pop() {
    if (!this.items.length) {
       return null;
    }
    return this.items.pop();
  }
  
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[items.length - 1];
  }
}

class MaxStack {
	constructor() {
		this.stack = new Stack();
		this.maxStack = new Stack();
	}
	
	push(num) {
		this.stack.push(num);
		
		if (!this.maxStack.length || num > this.maxStack.peek()) {
			this.maxStack.push(num);
		}
	}
	
	pop() {
		let num = this.stack.pop();
		if (this.stack.peek() === this.maxStack.peek()) {
			this.maxStack.pop();
		}
		return num;
	}
	
	getMax() {
		return this.maxStack.peek();
	}
}
