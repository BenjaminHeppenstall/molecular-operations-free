//v = (m / c) * (1 / Da)

var input = document.getElementById("mass");
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
        document.getElementById("concentration").focus();
    }
});

var input1 = document.getElementById("concentration");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("concentration").blur();
        document.getElementById("calcBtn").click();
    }
});

$(document).ready(function(){
	$("#selectVolume").hide()
}); 


function calculateVolume() { 

	var mass = parseFloat(document.getElementById("mass").value, 10);
	var concentration = parseFloat(document.getElementById("concentration").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

	if (isNaN(mass) || isNaN(concentration) || isNaN(daltons) || daltons <= 0 || mass <= 0 || concentration <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectVolume").hide()

	} else { 

		var massSize = parseFloat(document.getElementById("selectMass").value, 10);
		var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);
		

		var mass = mass * massSize;
		var concentration = concentration * concentrationSize;
		var daltons = daltons * daltonsSize;

		var answer = (mass / concentration) * (1 / daltons); 
        var answerSize = parseFloat(document.getElementById("selectVolume").value, 10);
	   	var answer = answer * answerSize;
	    var answer = Math.round(answer * 1000000) / 1000000;


	    document.getElementById("answer").innerHTML = Math.round(answer * 100) / 100; 
		$("#selectVolume").show()
		//document.getElementById("answer").innerHTML = "works";
			

		
	}
}
function change() { 

	var mass = parseFloat(document.getElementById("mass").value, 10);
	var concentration = parseFloat(document.getElementById("concentration").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

    var massSize = parseFloat(document.getElementById("selectMass").value, 10);
	var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
	var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);
		

    var mass = mass * massSize;
	var concentration = concentration * concentrationSize;
	var daltons = daltons * daltonsSize;

	if (isNaN(mass) || isNaN(concentration) || isNaN(daltons)) { 



	} else {

		if (isNaN(mass) || isNaN(concentration) || isNaN(daltons) || daltons <= 0 || mass <= 0 || concentration <= 0) { 
			
			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectVolume").hide()

		} else { 

    		var massSize = parseFloat(document.getElementById("selectMass").value, 10);
       		var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
    		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);

    		var mass = parseFloat(document.getElementById("mass").value, 10);
	        var concentration = parseFloat(document.getElementById("concentration").value, 10);
	        var daltons = parseFloat(document.getElementById("daltons").value, 10);

	    	var mass = mass * massSize;
    		var concentration = concentration * concentrationSize;
    		var daltons = daltons * daltonsSize;

	    	var answer = (mass / concentration) * (1 / daltons); 
            var answerSize = parseFloat(document.getElementById("selectVolume").value, 10);
    	   	var answer = answer * answerSize;
	        var answer = Math.round(answer * 1000000) / 1000000;


	        document.getElementById("answer").innerHTML = Math.round(answer * 100) / 100; 
		    $("#selectVolume").show() 
		}

	}
}