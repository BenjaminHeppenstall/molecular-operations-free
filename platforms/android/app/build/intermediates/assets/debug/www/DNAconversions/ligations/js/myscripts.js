var input = document.getElementById("length");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("vAmount").focus();
    }
});

var input2 = document.getElementById("vAmount");
input2.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("vLength").focus();
    }
});

var input1 = document.getElementById("vLength");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("vLength").blur();
        document.getElementById("calcBtn").click();
    }
});

$(document).ready(function(){
	$("#selectRatio").hide()
});

function calculateLigation() {

	var length = parseFloat(document.getElementById("length").value, 10);
	var vAmount = parseFloat(document.getElementById("vAmount").value, 10);
	var vLength = parseFloat(document.getElementById("vLength").value, 10);

	if (isNaN(length) || isNaN(vAmount) || isNaN(vLength) || length <= 0 || vAmount <= 0 || vLength <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectRatio").hide()

	} else { 


		var answer1 = length / vLength;
		var answer = answer1 * vAmount;

		var answerSize = parseFloat(document.getElementById("selectRatio").value, 10);
	    
	    //if (answerSize === "1" || "2" || "3") {

	    	var answer = answer * answerSize;
	    	document.getElementById("answer").innerHTML = answer + " ng insert for";
	    	$("#selectRatio").show()

	   /* else if (answerSize === "4") {

	    	var two = 2;
	    	var answer = answer * two;
	    	document.getElementById("answer").innerHTML = answer + " ng insert for";
	    	$("#selectRatio").show()

	    } else {

	    	var three = 3;
	    	var answer = answer * three;
	    	document.getElementById("answer").innerHTML = answer + " ng insert for";
	    	$("#selectRatio").show()

	    }*/

		//document.getElementById("answer").innerHTML = "works";
			

		
	}
}
function change() { 

	var length = parseFloat(document.getElementById("length").value, 10);
	var vAmount = parseFloat(document.getElementById("vAmount").value, 10);
	var vLength = parseFloat(document.getElementById("vLength").value, 10);


	if (isNaN(length) || isNaN(vLength) || isNaN(vAmount)) { 



	} else { 

		if (isNaN(length) || isNaN(vAmount) || isNaN(vLength) || length <= 0 || vAmount <= 0 || vLength <= 0) { 

			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectRatio").hide()

		} else { 

			var length = parseFloat(document.getElementById("length").value, 10);
			var vAmount = parseFloat(document.getElementById("vAmount").value, 10);
			var vLength = parseFloat(document.getElementById("vLength").value, 10);

			var answer1 = length / vLength;
			var answer = answer1 * vAmount;

		    var answerSize = parseFloat(document.getElementById("selectRatio").value, 10);
		    //if (answerSize === "1" || "2" || "3") {

		    	var answer = answer * answerSize;
		    	document.getElementById("answer").innerHTML = answer + " ng insert for";
	    	    $("#selectRatio").show()

	    	/* else if (answerSize === "4") {

	    		var two = 2;
	    		var answer = answer * two;
	    		document.getElementById("answer").innerHTML = answer + " ng insert for";
	    	    $("#selectRatio").show()

	    	} else {

	    		var three = 3;
	    		var answer = answer * three;
	    		document.getElementById("answer").innerHTML = answer + " ng insert for";
	    	    $("#selectRatio").show()

	    	}

	        document.getElementById("answer").innerHTML = Math.round(answer * 1000000) / 1000000 + " ng insert for"; 
		    $("#selectRatio").show() */
		} 
	}
}