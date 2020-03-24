var s = '';
for (var i = 0; i<10; i++) {
	if (i % 2 == 0) {
		for (a = 0; a < 5; a++) {
			s += '# ';
		}
	} else {
		for (a = 0; a < 5; a++) {
			s += ' #';
		}
	}
	s += '\n'
}
console.log(s)