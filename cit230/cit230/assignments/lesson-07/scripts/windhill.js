		/*Input: Temperature and wind Speed
		*Processing: Compute wind chill factor
		*Output:  Wind Chill Factor
		*/
	function doInputOutput() {
		var tempF = parseFloat(document.getElementById("Temperature").value);
		var speed = parseFloat(document.getElementById("windSpeed").value);
		var result = windChill (tempF, speed);
		
		document.getElementById("outputDiv").innerHTML = result;
	}
	function windChill(tempF, speed){
	var sum = 35.74 + 0.6215*tempF - 35.75*Math.pow(speed,0.16) + 0.4275*tempF*Math.pow(speed,0.16);
	return sum;
	}
	