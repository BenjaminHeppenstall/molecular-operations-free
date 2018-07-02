function changeMolarity() {
	var selectMolarity = document.getElementById("selectMolarity").value;
	//var location;
	switch (selectMolarity) {
		case "2":
		    location.href = "molarity-calc/mass/mass.html";
		    break;
		case "3":
		    location.href = "molarity-calc/volume/volume.html";
		    break;
		case "4":
		    location.href = "molarity-calc/molarity/molarity.html";
		    break;
		case "5":
		    location.href = "molarity-calc/dilute/dilute.html";
		    break;
	}
}