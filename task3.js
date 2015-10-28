function pifagor (height, width) {
	var pifagor = [];
		for (var i = 1 ; i<=height;i++) {
			pifagor[i]=[];
		for (var z = 1 ; z<= width;z++) {
			pifagor[i].push(i*z);
		}
		}
			console.log(pifagor);
}
pifagor (2, 2); 

