function memberOrder(a, b) {
	if (a == 'Chris Clubchief') return -1;
	if (b == 'Chris Clubchief') return 1;
	return a > b;
}

console.log(['Brandon', 'Chris Clubchief', 'James', 'Alan'].sort(memberOrder));