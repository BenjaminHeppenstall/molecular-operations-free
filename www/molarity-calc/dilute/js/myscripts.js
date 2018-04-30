//Vs = (Cd * Vd) / Cs

var input = document.getElementById("stockConcentration");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("desiredConcentration").focus();
    }
});

var input2 = document.getElementById("desiredConcentration");
input2.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("desiredVolume").focus();
    }
});

var input1 = document.getElementById("desiredVolume");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("desiredVolume").blur();
        document.getElementById("calcBtn").click();
    }
});

$(document).ready(function(){
	$("#selectStockVolume").hide()
});


function calculateDilute() { 

	var desiredConcentration = parseFloat(document.getElementById("desiredConcentration").value, 10);
	var desiredVolume = parseFloat(document.getElementById("desiredVolume").value, 10);
	var stockConcentration = parseFloat(document.getElementById("stockConcentration").value, 10);

	if (isNaN(desiredConcentration) || isNaN(desiredVolume) || isNaN(stockConcentration) || desiredConcentration <= 0 || desiredVolume <= 0 || stockConcentration <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectStockVolume").hide()

	} else { 

		var desiredConcentrationSize = parseFloat(document.getElementById("selectDesiredConcentration").value, 10);
		var desiredVolumeSize = parseFloat(document.getElementById("selectDesiredVolume").value, 10);
		var stockConcentrationSize = parseFloat(document.getElementById("selectStockConcentration").value, 10);
		

		var desiredConcentration = desiredConcentration * desiredConcentrationSize;
		var desiredVolume = desiredVolume * desiredVolumeSize;
		var stockConcentration = stockConcentration * stockConcentrationSize;

		if (stockConcentration < desiredConcentration) { 

			document.getElementById("answer").innerHTML = "impossible, stock Concentration must be higher then desired Concentration"; 
			$("#selectStockVolume").hide()

		} else {

		    var answer = (desiredConcentration * desiredVolume) / stockConcentration; 
		    var answerSize = parseFloat(document.getElementById("selectStockVolume").value, 10);
	    	var answer = answer * answerSize;
		    var answer = Math.round(answer * 1000000) / 1000000;


			document.getElementById("answer").innerHTML = answer; 
			$("#selectStockVolume").show()
			//document.getElementById("answer").innerHTML = "works";
			

		}
	}
}
function change() { 

	var desiredConcentration = parseFloat(document.getElementById("desiredConcentration").value, 10);
	var desiredVolume = parseFloat(document.getElementById("desiredVolume").value, 10);
	var stockConcentration = parseFloat(document.getElementById("stockConcentration").value, 10);

    var desiredConcentrationSize = parseFloat(document.getElementById("selectDesiredConcentration").value, 10);
	var desiredVolumeSize = parseFloat(document.getElementById("selectDesiredVolume").value, 10);
	var stockConcentrationSize = parseFloat(document.getElementById("selectStockConcentration").value, 10);
		

    var desiredConcentration = desiredConcentration * desiredConcentrationSize;
	var desiredVolume = desiredVolume * desiredVolumeSize;
	var stockConcentration = stockConcentration * stockConcentrationSize;

	if (isNaN(desiredConcentration) || isNaN(desiredVolume) || isNaN(stockConcentration)) { 



	} else { 
		if (isNaN(desiredConcentration) || isNaN(desiredVolume) || isNaN(stockConcentration) || desiredConcentration <= 0 || desiredVolume <= 0 || stockConcentration <= 0) { 
			
			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectStockVolume").hide()

		} else { 

    		var desiredConcentrationSize = parseFloat(document.getElementById("selectDesiredConcentration").value, 10);
		    var desiredVolumeSize = parseFloat(document.getElementById("selectDesiredVolume").value, 10);
		    var stockConcentrationSize = parseFloat(document.getElementById("selectStockConcentration").value, 10);

		    var desiredConcentration = parseFloat(document.getElementById("desiredConcentration").value, 10);
		    var desiredVolume = parseFloat(document.getElementById("desiredVolume").value, 10);
		    var stockConcentration = parseFloat(document.getElementById("stockConcentration").value, 10);
		

		    var desiredConcentration = desiredConcentration * desiredConcentrationSize;
		    var desiredVolume = desiredVolume * desiredVolumeSize;
		    var stockConcentration = stockConcentration * stockConcentrationSize;

	    	var answer = (desiredConcentration * desiredVolume) / stockConcentration; 
		    var answerSize = parseFloat(document.getElementById("selectStockVolume").value, 10);
	    	var answer = answer * answerSize;
		    var answer = Math.round(answer * 1000000) / 1000000;


	        document.getElementById("answer").innerHTML = answer; 
		    $("#selectStockVolume").show() 
		} 
	}
}