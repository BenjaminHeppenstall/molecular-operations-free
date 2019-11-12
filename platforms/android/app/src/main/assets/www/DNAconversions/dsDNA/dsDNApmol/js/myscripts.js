//amount * ((1/660) * 1 000 000) * (1/length) = pmol

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

	    var answer = amount / (617.96 * length + 36.04) * 1000000;
	    var answer = Math.round(answer);

	    var copyNumber = answer * (6.022 * Math.pow(10, 23));
	    var copyNumber = copyNumber * Math.pow(10, -12)
	    var copyNumber = copyNumber.toExponential();

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
	    try {
	    	//var copyNumber = 93558913;
	    	//var copyNumber = copyNumber.toExponential();
	    	var StringAnswer = String(copyNumber);
	    	var end = StringAnswer.split("e");
	    	var res = end[0].split(".");
	    	var answer2 = "0." + res[1];
	    	var answer3 = parseFloat(answer2);
	    	var answer3 = answer3.toPrecision(3);
	    	var StringAnswer2 = String(answer3);
	    	while (StringAnswer2.substr(StringAnswer2.length - 1) < 1) {
	    		var StringAnswer2 = StringAnswer2.slice(0, -1);

	    	}
	    	var res1 = StringAnswer2.split(".");
	    	var copyNumber = res[0] + "." + res1[1];
	    	var copyNumber = copyNumber + "e" + end[1];
	    	//var copyNumber = parseFloat(CopyNumber);
	    	//document.getElementById("answer2").innerHTML = copyNumber;
	    	
	    }
	    catch(err) {
	    	//document.getElementById("answer2").innerHTML = "it dont work";

	    }

		document.getElementById("answer").innerHTML = answer + " pmol\n" +  copyNumber + " molecules";
		//document.getElementById("answer").innerHTML = "works";
			

		
	}

}