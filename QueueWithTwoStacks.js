class QueueWithStacks {
	constructor() {
	    this.stackOne = new Stack();
	    this.stackTwo = new Stack();
	}
	
	enqueue(data) {
		this.stackOne.push(data);
	}
	
	dequeue() {
		if (this.stackTwo.length === 0) {
			this.transferStackOneToTwo();
			return this.stackTwo.pop();
		}
		return this.stackTwo.pop();
	}
	
	transferStackOneToTwo() {
		this.stackOne.forEach((item) => {
			this.stackTwo.push(item);
			this.stackOne.pop();
		});
	}
}
