var s = '';
for (var i = 0; i < 10; i++) {
	for (var a = 0; a <= i; a++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);