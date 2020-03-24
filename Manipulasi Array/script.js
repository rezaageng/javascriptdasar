// 1. Menambah Array
// var fckgArr = [];
// fckgArr[1] = 'Paijo';
// fckgArr[2] = 'Sugino';
// fckgArr[3] = 56;
// fckgArr[4] = true;
// console.log(fckgArr[3]);

// 2. Menghapus Array
// var fckgArr = ['Paijo','Sugino',1,true];
// fckgArr[1] = undefined;
// console.log(fckgArr);

// 3. Menampilkan seluruh Array
// var fckgArr = ['Paijo','Sugino',1,true];
// for(i = 0; i < fckgArr.length; i++) {
// 	console.log('Array ke-' + (i+1) + ' Adalah ' + fckgArr[i]);
// }

// Method Array
var fckgArr = ['Paijo','Sugino',1,true];
// 1. join
// console.log(fckgArr.join(', ')); // Menampilkan seluruh array dengan rapih

// 2. push & pop
// fckgArr.push('Chihiro','Yuki'); // Tambah dari belakang
// fckgArr.pop(); // Hapus dari belakang

// 3. unshift & shift
// fckgArr.unshift('Chihiro','Yuki'); // Tambah dari depan
// fckgArr.shift(); // Hapus dari depan

// 4. splice
// splice(indexAwal,hapusBerapa(ops),elemen1(ops),elemenN(ops));
// fckgArr.splice(1,2,'Yukine','Nora');

// 5. slice
// slice(indexAwal,indexAkhir);
// var fckgArr2 = fckgArr.slice(1,3);

// 6. forEach
// fckgArr.forEach(function(x,i) {
// 	console.log('jadi anu ke-' + (i+1) + ' adalah ' + x);
// })

// 7.map
// var fckgNum = [1,2,3,4,5]
// var fckgNum2 = fckgNum.map(function(x) {
// 	return x * 2 ;
// });
// console.log(fckgNum2.join(', '));

// 8. sort
// var fckgNum = [1,5,32,86,33,5,9,2];
// fckgNum.sort(function(a,b) {
// 	return a-b;
// })

// 9. filter & find
var fckgNum = [1,5,32,86,33,5,9,2];
var fckgNum2 = fckgNum.filter(function(x) {
	return x > 5;
})
var fckgNum3 = fckgNum.find(function(x) {
	return x > 5;
})

// Tampil
// console.log(fckgArr.join(', '));
// console.log(fckgArr2.join(', '));
console.log(fckgNum.join(', '));
console.log(fckgNum2.join(', '));
console.log(fckgNum3);