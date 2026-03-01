const makeChange = (c) => {
	var purse = {"q": 0, "d": 0, "n": 0, "p": 0};
	var remaining = c;
	if (remaining >= 25) {
		purse.q += Math.floor(remaining / 25);
		remaining = remaining % 25;
	} if (remaining >= 10) {
		purse.d += Math.floor(remaining / 10);
		remaining = remaining % 10;
	} if (remaining >= 5) {
		purse.n += Math.floor(remaining / 5);
		remaining = remaining % 5;
	}
	purse.p += remaining;
	return purse;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
