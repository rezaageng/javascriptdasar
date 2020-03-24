var noAngkot = 1;
var jmlAnkot = 10;
var angkotBeroprasi = 6
for(noAngkot; noAngkot <= jmlAnkot; noAngkot++) {
	if (noAngkot <= angkotBeroprasi) {
		console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
	}
	else if (noAngkot === angkotBeroprasi + 2) {
		console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
	}
	else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
	}
}