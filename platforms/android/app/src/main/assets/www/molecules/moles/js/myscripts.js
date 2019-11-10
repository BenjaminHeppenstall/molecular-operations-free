
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

	    /*try {
	    	var StringAnswer = String(answer);
	    	var res = StringAnswer.split(".");
	    	var answer2 = "0." + res[1];
	    	var answer3 = parseFloat(answer2);
	    	var answer3 = answer3.toPrecision(2);
	    	var StringAnswer2 = String(answer3);
	    	var res1 = StringAnswer2.split(".");
	    	var answer = res[0] + "." + res1[1];
	    	var answer = parseFloat(answer);
	    	
	    }
	    catch(err) {
	    	//round here to avoid integer inaccuracies
	    }*/

	    if (isNaN(size)) { 

	    	var answer = answer * answerSize;

	    	try {
		    	var StringAnswer = String(answer);
		    	var res = StringAnswer.split("e");
		    	var answer2 = res[0];
		    	var answer3 = parseFloat(answer2);
		    	var answer3 = Math.round(answer3 * 10000000000) / 10000000000;
		    	var StringAnswer2 = String(answer3);
		    	var answer = StringAnswer2 + "e" + res[1];
		    	var answer = parseFloat(answer);
		    	
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }

	    	document.getElementById("answer").innerHTML = answer;
	    	$("#size").show()

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 moles";
	    	$("#size").hide()

	    } else {

		    var answer = answer * Math.pow(10, size);
		    var answer = answer * answerSize;

	    	try {
		    	var StringAnswer = String(answer);
		    	var res = StringAnswer.split("e");
		    	var answer2 = res[0];
		    	var answer3 = parseFloat(answer2);
		    	var answer3 = Math.round(answer3 * 10000000000) / 10000000000;
		    	var StringAnswer2 = String(answer3);
		    	var answer = StringAnswer2 + "e" + res[1];
		    	var answer = parseFloat(answer);
		    	
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }

	    	document.getElementById("answer").innerHTML = answer;
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

	    /*try {
	    	var StringAnswer = String(answer);
	    	var res = StringAnswer.split(".");
	    	var answer2 = "0." + res[1];
	    	var answer3 = parseFloat(answer2);
	    	var answer3 = answer3.toPrecision(2);
	    	var StringAnswer2 = String(answer3);
	    	var res1 = StringAnswer2.split(".");
	    	var answer = res[0] + "." + res1[1];
	    	var answer = parseFloat(answer);
	    	
	    }
	    catch(err) {
	    	//round here to avoid integer inaccuracies
	    }*/

	    if (isNaN(size)) {

	    	var answer = answer * answerSize;

	    	try {
		    	var StringAnswer = String(answer);
		    	var res = StringAnswer.split("e");
		    	var answer2 = res[0];
		    	var answer3 = parseFloat(answer2);
		    	var answer3 = Math.round(answer3 * 10000000000) / 10000000000;
		    	var StringAnswer2 = String(answer3);
		    	var answer = StringAnswer2 + "e" + res[1];
		    	var answer = parseFloat(answer);
		    	
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }

	    	document.getElementById("answer").innerHTML = answer;
	    	$("#size").show()

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 moles";
	    	$("#size").hide()

	    } else {

	    	var answer = answer * Math.pow(10, size);
	    	var answer = answer * answerSize;

	    	try {
		    	var StringAnswer = String(answer);
		    	var res = StringAnswer.split("e");
		    	var answer2 = res[0];
		    	var answer3 = parseFloat(answer2);
		    	var answer3 = Math.round(answer3 * 10000000000) / 10000000000;
		    	var StringAnswer2 = String(answer3);
		    	var answer = StringAnswer2 + "e" + res[1];
		    	var answer = parseFloat(answer);
		    	
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }

	    	document.getElementById("answer").innerHTML = answer;
			$("#size").show()
			//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}