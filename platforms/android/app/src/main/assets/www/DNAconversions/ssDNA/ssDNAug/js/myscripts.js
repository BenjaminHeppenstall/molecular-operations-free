
var input = document.getElementById("DNAlength");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("DNAamount").focus();
    }
});

var input1 = document.getElementById("DNAamount");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("DNAamount").blur();
        document.getElementById("calcBtn").click();
    }
});

function calculateDNAug() {

	var length = parseFloat(document.getElementById("DNAlength").value, 10);
	var amount = parseFloat(document.getElementById("DNAamount").value, 10);

	if (isNaN(length) || isNaN(amount) || length <= 0 || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";

	} else { 

		var answer1 = amount * 330;
	    var answer = answer1 / 1000 * length;

	    try {
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

	    }

		document.getElementById("answer").innerHTML = answer + " µg";
		//document.getElementById("answer").innerHTML = "works";
		
	}
}