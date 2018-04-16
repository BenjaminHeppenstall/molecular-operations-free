
var input1 = document.getElementById("molecules");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("notation").focus();
    }
});

var input = document.getElementById("notation");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("calcBtn").click();
    }
});

function calculateMoles() {

	var power = Math.pow(10, -24);

	var amount = parseFloat(document.getElementById("molecules").value, 10);
	var size = parseFloat(document.getElementById("notation").value, 10);

	if (isNaN(amount) || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";

	} else {

		var answer1 = 1.660538863127 * amount;
		answer1 = Math.round(answer1 * 100000000) / 100000000;

	    var answer = power * answer1;

	    if (isNaN(size)) { 

	    	document.getElementById("answer").innerHTML = answer + " moles";

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 moles";

	    } else {

		document.getElementById("answer").innerHTML = answer * Math.pow(10, size) + " moles";
		//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}