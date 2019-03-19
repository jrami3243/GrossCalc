function calculateGrossPay(){
	var numOfWorkers = 3;
	for(var i= 1; i <= numOfWorkers; i++) {

		var hoursWorked = parseFloat(document.getElementById('hours'+ i).value);
		var wage = parseFloat(document.getElementById('wage'+ i).value);


		if( hoursWorked > 40) {
			var regTime = wage * 40;
			var overTime = (wage*1.5) * (hoursWorked - 40);
			var result = regTime + overTime;

			document.getElementById('result' + i).value = result;
		}else {
			document.getElementById('result' + i).value = hoursWorked * wage;

		}
	}
}


function reset(){
	document.getElementById("reset").reset();
}























