function numericalOrder(a, b) {
	if (a < b) {return -1};
	if (a > b) {return 1};
	return 0;
}


console.log([4, 1, 2, 3, 31, 10].sort(numericalOrder));
