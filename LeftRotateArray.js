function rotasiarray(array, rotasi) {
	const rotarray = arr.concat();
	for(let i = 0; i < rotasi; i++) {
		const frontitem = rotarray.shift();
		rotarray.push(frontitem);
	}
	return rotarray;
	
}

const noRotasi = 4;
const bilArray = [1,2,3,4,5];

const output = [5,1,2,3,4];

console.log(rotasiarray(bilArray, noRotasi));
console.log(output);