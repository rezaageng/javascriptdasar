var s = '';
for (var i = 0; i < 10; i++) {
	for (var a = 0; a < 10; a++) {
		s += a < i ? ' ':'*';
	}
	s += '\n';
}
console.log(s);