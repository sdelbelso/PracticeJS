// rule: don't use division
function getProductsOfAllIntsExceptAtIndex(intArr) {
	// cover edge case
	if (intArr.length < 2) {
		throw new Error('Array must have more than two integers');
	}
	const productsArr = [];
	let productsSoFar = 1;
	for (let i = 0; i < intArr.length; i++) {
		productsArr[i] = productsSoFar;
		productsSoFar *= intArr[i];
	}
	
	// reset
	productsSoFar = 1;
	for (let j = intArr.length - 1; j >= 0; j--) {
		productsArr[j] *= productsSoFar;
		productsSoFar *= intArr[j];
	}
	return productsArr;
}
