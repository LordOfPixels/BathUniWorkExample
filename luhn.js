function checkLuhm(value) {
	//setting the isValid to false here prevents me having to bother setting it later just check against the true values only.
	let isValid = false;
	//check is it only digits and is it correct length first
	if (/^\d{16}$/.test(value)) {
		//then check the luhm algorithm
		let total = 0
		for (let i = 16, x = 0; i>0; i--){
			x = Number(value.at(i-1)); //i thought about putting the string into a reverse order array of integers but i think this works well enough and doesn't require another for loop
			//since addition doesn't care about the order we can just check if the digit position is even or odd and do it all in one pass
			//additionally I want it noted that I came up with this mathematical solution to the problem all by myself, because I'm really proud of how efficient it feels
			if ((16-i)%2 == 0) {
				total += x;
			}
			else {
				//x*2%10 allows me to get the digit component of the value and the log10 algorithm grabs the length of the integer -1
				//since there's no way for a doubled single digit integer to go past 18 i can safely assume that the tens value is the same as the length -1
				total += ((x*2)%10)+((Math.log(x*2) * Math.LOG10E | 0));
			}
		}
		//we can check for mod 10 and sum at once here
		if (total%10 == 0 && total != 0) {
			isValid = true;
		}
	}
	//don't need to bother setting the isValid value here because we set it at creation and it'll only change on a valid input
	return isValid;
}