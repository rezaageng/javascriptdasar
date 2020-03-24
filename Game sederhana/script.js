var a = prompt('Polih Permainan \n 1. Suit\n 2. Tebak Angka');

if (a == 1) {
	var q = true;
	while (q) {
		//player
		var p = prompt('Pilih\nGajah, Semut, Orang');
		//com+random
		var com = Math.random();
		if (com < 0.34) {
			var com = 'Gajah';
		}
		else if (com >= 0.34 && com < 0.64) {
			var com = 'Orang';
		}
		else {
			var com = 'Semut';
		}
		var hasil = '';
		//rules
		if (p == com) {
			hasil = 'Seri';
		}
		else if (p == 'Gajah') {
			hasil = (com == 'Orang') ? 'Menang' : 'Kalah';
		}
		else if (p == 'Semut') {
			hasil = (com == 'Gajah') ? 'Menang' : 'Kalah';
		}
		else if (p == 'Orang') {
			hasil = (com == 'Semut') ? 'Menang' : 'Kalah'
		}
		else {
			hasil = '404 Not Found!'
		}
		//display
		alert('Player: ' + p + '\nComputer: ' + com + '\n' + p + ' VS ' + com + '\nKamu ' + hasil);
		q = confirm('Suit Lagi')
		x = confirm('Pilih game Lain?')
	}	
}else if (a == 2) {
	var q = true;
	while (q) {
		//Menu
		alert('Tebak Angka 1-10\nAnda memiliki 3 Kesempatan')
		//Com+Random
			var com2 = Math.floor(Math.random() * 10) + 1;
			var hasil2 = '';
		//Player
		for (var i = 3; i > 0; i--) {
			var p2 = prompt('Masukan Angka!\nAnda memiliki ' + i + ' kesempatan!')
		//Rules
			if (p2 == com2) {
				hasil2 = 'Benar.';
				alert('Tebakan Anda: ' + p2 + '\nSistem: ' + com2 + '\nTebakanmu ' + hasil2);
				var i = 'end';
			}
			else if (p2 > com2) {
				hasil2 = 'Tinggi.';
				alert('Tebakan Anda terlalu ' + hasil2);
			}
			else {
				hasil2 = "Rendah"
				alert('Tebakan Anda terlalu ' + hasil2);
			}
		}
		//display
		if (i == 0) {
			alert('Anda GAGAL!');
		}
		q = confirm('Tebak Lagi?');
	}	
} else {
	
}