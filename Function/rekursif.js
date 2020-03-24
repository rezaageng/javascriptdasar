var n = prompt('Masukan Nilai!');
function xyz(n) {
	if (n === 0) return 1;
	return n * xyz(n-1);
}
alert(xyz(n));