// Object Literal
var siswa = {
	nama : 'Paijo',
	kelas : 'X - RPL 2',
	alamat : {
		desa : 'Konohagakure',
		kota : 'San Andreas',
		provinsi : 'Miramar'
	},
	nilai : [80,90,85,85]
}

// Function Declaration
function dataSiswa(nama,tingkat,jurusan) {
	var siswa = {};
	siswa.nama = nama;
	siswa.tingkat = tingkat;
	siswa.jurusan = jurusan;
	return siswa;
}
var siswa2 = dataSiswa('Pairi',11,'RPL');

// Constructor
function Data(nama,tingkat,jurusan) {
	this.nama = nama;
	this.tingkat = tingkat;
	this.jurusan = jurusan;
}
var siswa3 = new Data('Tumini',12,'RPL');