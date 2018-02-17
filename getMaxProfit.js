function getMaxProfit(stockArray) {

	// cover edge case
	if (stockArray.length < 2) {
		throw new Error('Getting a profit requires at least 2 prices');
	}
  
	// get first minute difference as starting point so that we can return possible negative profit
	let maxChange = stockArray[1] - stockArray[0];
	let minPrice = stockArray[0];
  
	for (let i = 1; i < stockArray.length; i++) {
  
		//check max profit before setting minPrice
		const difference = stockArray[i] - minPrice;
    
		if (difference > maxChange) {
			maxChange = difference;
		}
    
		//set min price
		if (stockArray[i] < minPrice) {
			minPrice = stockArray [i];
		}
    
	}
	return maxChange;
}
