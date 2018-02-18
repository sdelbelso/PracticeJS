class QueueWithStacks {
	const stackOne = new Stack();
	const stackTwo = new Stack();
	
	function enqueue(data) {
		this.stackOne.push(data);
	}
	
	function dequeue() {
		if (this.stackTwo.length === 0) {
			this.transferStackOneToTwo();
			return this.stackTwo.pop();
		}
		return this.stackTwo.pop();
	}
	
	function transferStackOneToTwo() {
		this.stackOne.forEach((item) => {
			this.stackTwo.push(item);
			this.stackOne.pop();
		});
	}
}
