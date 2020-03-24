var noAngkot = 1;
var jmlAnkot = 10;
var angkotBeroprasi = 6
for(noAngkot; noAngkot <= jmlAnkot; noAngkot++) {
	if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
		console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
	}
	else if (noAngkot === angkotBeroprasi + 2 || noAngkot === angkotBeroprasi + 4 || noAngkot === angkotBeroprasi - 1) {
		console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
	}	
	else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
	}
}