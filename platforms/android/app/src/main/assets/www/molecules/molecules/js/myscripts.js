
var input1 = document.getElementById("mol");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("mol").blur();
        document.getElementById("calcBtn").click();
    }
});

/* var input = document.getElementById("notation");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("calcBtn").click();
    }
}); */

function calculateMolecules() {

	var power = Math.pow(10, 23);

	var amount = parseFloat(document.getElementById("mol").value, 10);
	var size = parseFloat(document.getElementById("size").value, 10);

	if (isNaN(amount) || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";

	} else {

		var answer1 = 6.022140857 * amount;
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

	    	try {
		    	var StringAnswer = String(answer);
		    	if (StringAnswer.indexOf('e') > -1){
		    		var res = StringAnswer.split("e");
			    	var answer2 = res[0];
			    	var answer3 = parseFloat(answer2);
			    	var answer3 = Math.round(answer3 * 10000000000000) / 10000000000000;
			    	var StringAnswer2 = String(answer3);
			    	var answer = StringAnswer2 + "e" + res[1];
			    	var answer = parseFloat(answer);
			    } else {
		    		var answer = Math.round(answer / 100) * 100;
		    	}
		    	
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }

	    	document.getElementById("answer").innerHTML = Math.round(answer / 10000) * 10000 + " molecules";

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 molecules";

	    } else {

	    	//var answer = answer * size;

	    	try {
		    	var StringAnswer = String(answer);
		    	if (StringAnswer.indexOf('e') > -1){
		    		var res = StringAnswer.split("e");
			    	var answer2 = res[0];
			    	var answer3 = parseFloat(answer2);
			    	var answer3 = Math.round(answer3 * 10000000000000) / 10000000000000;
			    	var StringAnswer2 = String(answer3);
			    	var answer = StringAnswer2 + "e" + res[1];
			    	var answer = parseFloat(answer);
			    } else {
		    		var answer = Math.round(answer / 100) * 100;
		    	}
		    	
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }


			document.getElementById("answer").innerHTML = Math.round(answer * size / 10000) * 10000 + " molecules";
			//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}

function change() {

	var power = Math.pow(10, 23);

	var amount = parseFloat(document.getElementById("mol").value, 10);
	var size = parseFloat(document.getElementById("size").value, 10);

	if (isNaN(amount) || amount <= 0) { 


	} else {

		var answer1 = 6.022140857 * amount;
	    answer1 = Math.round(answer1 * 100000000) / 100000000;

	    var answer = power * answer1;

	    if (isNaN(size)) { 

	    	try {
		    	var StringAnswer = String(answer);
		    	if (StringAnswer.indexOf('e') > -1){
		    		var res = StringAnswer.split("e");
			    	var answer2 = res[0];
			    	var answer3 = parseFloat(answer2);
			    	var answer3 = Math.round(answer3 * 10000000000000) / 10000000000000;
			    	var StringAnswer2 = String(answer3);
			    	var answer = StringAnswer2 + "e" + res[1];
			    	var answer = parseFloat(answer);
			    } else {
		    		var answer = Math.round(answer / 100000000000) * 100000000000;
		    	}
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }


	    	document.getElementById("answer").innerHTML = Math.round(answer / 10000) * 10000 + " molecules";

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 molecules";

	    } else {

	    	//var answer = answer * size;

	    	try {
		    	var StringAnswer = String(answer);
		    	if (StringAnswer.indexOf('e') > -1){
		    		var res = StringAnswer.split("e");
			    	var answer2 = res[0];
			    	var answer3 = parseFloat(answer2);
			    	var answer3 = Math.round(answer3 * 10000000000000) / 10000000000000;
			    	var StringAnswer2 = String(answer3);
			    	var answer = StringAnswer2 + "e" + res[1];
			    	var answer = parseFloat(answer);
			    } else {
			    	var answer = Math.round(answer / 100000000000) * 100000000000;
		    	}
		    }
		    catch(err) {
		    	//round here to avoid integer inaccuracies
		    }


			document.getElementById("answer").innerHTML = Math.round(answer * size / 10000) * 10000 + " molecules";
			//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}