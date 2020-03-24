var penumpang = [];
var tambahPenumpang = function(namaPenumpang,penumpang) {
	// Jika angkot kosong
	if (penumpang.length == 0) {
		// Tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar function
		return penumpang;
	}
	// Else
	else {
		// Telusuri seluruh kursi dari awal
		for(i = 0; i < penumpang.length; i++) {
			// Jika ada kursi kosong
			if(penumpang[i] == undefined) {
			 	// Tambah penumpang di kursi tersebut
			 	penumpang[i] = namaPenumpang;
			 	// kembalikan isi array dan keluar function
			 	return penumpang;
			 }	
			// Jika sudah ada nama yang sama
			else if(penumpang[i] == namaPenumpang) {
			 	// Tampilkan pesan kesalahanya
			 	console.log('Penumpang dengan nama ' + namaPenumpang + ' sudah ada di dalam angkot!')
			 	// kembalikan isi array dan keluar function
			 	return penumpang;
			 }	
			// Jika seluruh kursi terisi
			else if(i == penumpang.length - 1) {
				// Tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array dan keluar function
				return penumpang;
			}	
		}		
	}		
}
var hapusPenumpang = function(namaPenumpang,penumpang) {
	// Jika Angkot Kosong
	if(penumpang.length == 0) {
		// Tampilkan pesan angkot kosong dan tidak mungkin ada penumpang turun
		console.log('Angkot kosong, tidak mungkin ada penumpang turun!')
		// kembalikan isi array dan keluar function
		return penumpang;
	}	
	// else
	else {
		// Telusuri seluruh kursi dari awal
		for(i = 0; i < penumpang.length; i++) {
			// Jika nama penumpang sesuai
			if(penumpang[i] == namaPenumpang) {
				// Hapus nama ganti undefined
				penumpang [i] = undefined;
				// kembalikan isi array dan keluar function
				return penumpang;
			}	
			// Jika tidak ada nama yang sesuai
			else {
				// Tampilkan pesan kesalahan
				console.log(namaPenumpang + ' tidak ada di dalam angkot!');
				// kembalikan isi array dan keluar function
			}	
		}		
	}
}