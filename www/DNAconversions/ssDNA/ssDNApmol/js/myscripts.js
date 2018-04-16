
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
        document.getElementById("calcBtn").click();
    }
});

function calculateDNAug() {

  var length = parseFloat(document.getElementById("DNAlength").value, 10);
  var amount = parseFloat(document.getElementById("DNAamount").value, 10);

  if (isNaN(length) || isNaN(amount) || length <= 0 || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";

	} else { 

		var answer1 = amount * ((1 / 330) * 1000);
        var answer = answer1 * (1 / length);

		document.getElementById("answer").innerHTML = answer + " pmol";
		//document.getElementById("answer").innerHTML = "works";
		
	}

}