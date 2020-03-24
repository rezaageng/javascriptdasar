var item = prompt ('Masukan Judul \nSAO, SnK, FMAI, Build, 01');
switch (item) {
	case 'SAO' :
	case 'SnK' :
	case 'FMAI' :
	 	alert ('Anime');
	 	break;
	case 'Build' :
	case '01' :
	 	alert ('Tokusatsu');
		break;
	default :
		alert ('404');
}