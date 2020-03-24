var noAngkot = 1;
var jmlAnkot = 10;
var angkotBeroprasi = 6
while(noAngkot <= angkotBeroprasi) {
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
	noAngkot++
}
for(noAngkot = angkotBeroprasi + 1; noAngkot <= 10; noAngkot++) {
	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
}