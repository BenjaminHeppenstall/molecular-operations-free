//m = C * V * Da

var input = document.getElementById("concentration");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("daltons").focus();
    }
});

var input2 = document.getElementById("daltons");
input2.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("volume").focus();
    }
});

var input1 = document.getElementById("volume");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("volume").blur();
        document.getElementById("calcBtn").click();
    }
});

$(document).ready(function(){
	$("#selectMass").hide()
});


function calculateMass() { 

	var concentration = parseFloat(document.getElementById("concentration").value, 10);
	var volume = parseFloat(document.getElementById("volume").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

	if (isNaN(concentration) || isNaN(volume) || isNaN(daltons) || daltons <= 0 || concentration <= 0 || volume <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectMass").hide()

	} else { 

		var concentration = parseFloat(document.getElementById("concentration").value, 10);
		var volume = parseFloat(document.getElementById("volume").value, 10);
		var daltons = parseFloat(document.getElementById("daltons").value, 10);

		var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
		var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);

		var concentration = concentration * concentrationSize;
		var volume = volume * volumeSize;
		var daltons = daltons * daltonsSize;

		var answer = concentration * volume * daltons; 
		var answerSize = parseFloat(document.getElementById("selectMass").value, 10);

		var answer = answer * answerSize;
		var answer = Math.round(answer * 1000000) / 1000000;

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

	    document.getElementById("answer").innerHTML = answer; 
		$("#selectMass").show()
		//document.getElementById("answer").innerHTML = "works";
			

		
	}
}
function change() { 

	var concentration = parseFloat(document.getElementById("concentration").value, 10);
	var volume = parseFloat(document.getElementById("volume").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

	if (isNaN(concentration) || isNaN(volume) || isNaN(daltons)) { 



	} else {

		if (isNaN(concentration) || isNaN(volume) || isNaN(daltons) || daltons <= 0 || concentration <= 0 || volume <= 0) { 

			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectMass").hide()

		} else { 

			var concentration = parseFloat(document.getElementById("concentration").value, 10);
			var volume = parseFloat(document.getElementById("volume").value, 10);
			var daltons = parseFloat(document.getElementById("daltons").value, 10);

			var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
			var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
			var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);

			var concentration = concentration * concentrationSize;
			var volume = volume * volumeSize;
			var daltons = daltons * daltonsSize;

			var answer = concentration * volume * daltons; 
			var answerSize = parseFloat(document.getElementById("selectMass").value, 10);
			var answer = answer * answerSize;
			var answer = Math.round(answer * 1000000) / 1000000;

			/*var concentration = parseFloat(document.getElementById("concentration").value, 10);
    	    var volume = parseFloat(document.getElementById("volume").value, 10);
    	    var daltons = parseFloat(document.getElementById("daltons").value, 10);

    		var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
       		var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
    		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);


	    	var concentration = concentration * concentrationSize;
    		var volume = volume * volumeSize;
    		var daltons = daltons * daltonsSize;

	    	var answer = concentration * volume * daltons; 
            var answerSize = parseFloat(document.getElementById("selectMass").value, 10);
    	   	var answer = answer * answerSize;
	        var answer = Math.round(answer * 1000000) / 1000000;*/

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

	        document.getElementById("answer").innerHTML = answer; 
		    $("#selectMass").show() 
		}

	}
}