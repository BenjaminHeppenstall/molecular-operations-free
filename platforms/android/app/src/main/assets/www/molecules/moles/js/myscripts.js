
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
        document.getElementById("notation").blur();
        document.getElementById("calcBtn").click();
    }
});

$(document).ready(function(){
	$("#size").hide()
});

function calculateMoles() {

	var power = Math.pow(10, -24);

	var amount = parseFloat(document.getElementById("molecules").value, 10);
	var size = parseFloat(document.getElementById("notation").value, 10);
	var answerSize = parseFloat(document.getElementById("size").value, 10);

	if (isNaN(amount) || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#size").hide()

	} else {

		var answer1 = 1.660538863127 * amount;
		answer1 = Math.round(answer1 * 100000000) / 100000000;

	    var answer = power * answer1;

	    if (isNaN(size)) { 

	    	document.getElementById("answer").innerHTML = answer;
	    	$("#size").show()

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 moles";
	    	$("#size").hide()

	    } else {

	    var answer = answer * Math.pow(10, size);
		document.getElementById("answer").innerHTML = answer * answerSize;
		$("#size").show()
		//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}
function change() {

	var power = Math.pow(10, -24);

	var amount = parseFloat(document.getElementById("molecules").value, 10);
	var size = parseFloat(document.getElementById("notation").value, 10);
	var answerSize = parseFloat(document.getElementById("size").value, 10);

	if (isNaN(amount) || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#size").hide()

	} else {

		var answer1 = 1.660538863127 * amount;
		answer1 = Math.round(answer1 * 100000000) / 100000000;

	    var answer = power * answer1;

	    if (isNaN(size)) { 

	    	document.getElementById("answer").innerHTML = answer;
	    	$("#size").show()

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 moles";
	    	$("#size").hide()

	    } else {

	    var answer = answer * Math.pow(10, size);
		document.getElementById("answer").innerHTML = answer * answerSize;
		$("#size").show()
		//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}