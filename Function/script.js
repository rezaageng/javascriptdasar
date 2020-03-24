//Full

// var lagi = true;
// while (lagi) {
// 	function volume2kubus(kubus1, kubus2) {
// 		var vk1 = kubus1 * kubus1 * kubus1;
// 		var vk2 = kubus2 * kubus2 * kubus2;
// 		var hasil = vk1 + vk2;
// 		return hasil;
// 	}
// 	var k1 = prompt('Masukan sisi kubus1!');
// 	var k2 = prompt('Masukan sisi kubus2!');
// 	alert('Hasilnya adalah ' + volume2kubus(k1, k2));
// 	lagi = confirm('Hitung lagi?');
// }


//refactoring
var lagi = true;
while (lagi) {
	function volume2kubus(kubus1, kubus2) {
		return kubus1 * kubus1 * kubus1 + kubus2 * kubus2 * kubus2;
	}
	var k1 = prompt('Masukan sisi kubus1!');
	var k2 = prompt('Masukan sisi kubus2!');
	alert('Hasilnya adalah ' + volume2kubus(k1, k2));
	lagi = confirm('Hitung lagi?');
}	