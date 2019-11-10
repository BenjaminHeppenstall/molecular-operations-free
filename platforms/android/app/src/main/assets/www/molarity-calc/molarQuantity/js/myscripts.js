//m = C * V * Da

var input = document.getElementById("concentration");
input.addEventListener("keyup", function(event) {
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

	if (isNaN(concentration) || isNaN(volume) || concentration <= 0 || volume <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectMass").hide()

	} else { 

			var concentration = parseFloat(document.getElementById("concentration").value, 10);
			var volume = parseFloat(document.getElementById("volume").value, 10);

			var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
			var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);

			var concentration = concentration * concentrationSize;
			var volume = volume * volumeSize;

			var answer = concentration * volume; 
			var answerSize = parseFloat(document.getElementById("selectMass").value, 10);

			var answer = answer * answerSize;
			var answer = Math.round(answer * 1000000) / 1000000;


	    document.getElementById("answer").innerHTML = answer; 
		$("#selectMass").show()
		//document.getElementById("answer").innerHTML = "works";
			

		
	}
}
function change() { 

	var concentration = parseFloat(document.getElementById("concentration").value, 10);
	var volume = parseFloat(document.getElementById("volume").value, 10);

	if (isNaN(concentration) || isNaN(volume)) { 



	} else {

		if (isNaN(concentration) || isNaN(volume) || concentration <= 0 || volume <= 0) { 

			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectMass").hide()

		} else { 

			var concentration = parseFloat(document.getElementById("concentration").value, 10);
			var volume = parseFloat(document.getElementById("volume").value, 10);

			var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
			var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);

			var concentration = concentration * concentrationSize;
			var volume = volume * volumeSize;

			var answer = concentration * volume; 
			var answerSize = parseFloat(document.getElementById("selectMass").value, 10);
			var answer = answer * answerSize;
			var answer = Math.round(answer * 1000000) / 1000000;

			/*var concentration = parseFloat(document.getElementById("concentration").value, 10);
    	    var volume = parseFloat(document.getElementById("volume").value, 10);

    		var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
       		var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);


	    	var concentration = concentration * concentrationSize;
    		var volume = volume * volumeSize;
			
	    	var answer = concentration / volume; 
            var answerSize = parseFloat(document.getElementById("selectMass").value, 10);
    	   	var answer = answer * answerSize;
	        var answer = Math.round(answer * 1000000) / 1000000;*/


	        document.getElementById("answer").innerHTML = answer; 
		    $("#selectMass").show() 
		}

	}
}