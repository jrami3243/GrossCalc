function calculateGrossPay(){
	var pay_rate  = parseInt(document.getElementById('box1').value);
	var hours = parseInt(document.getElementById('box2').value);
	var result= document.getElementById('result');
	var myResult = null;


	if ( hours >= 40 ) {
		regpay=(pay_rate*40)
		overTimePay=((pay_rate*1.5)*(hours-40))
		myResult = (regpay+overTimePay);

		document.getElementById('myResult').value;
}
}
//Employee 2
var box1 = parseInt(document.getElementById('wage').value);
var box2 = parseInt(document.getElementById('hour').value);
var results= document.getElementById('results');
var myResults = null;

	if ( hours >= 40 ) {
		myResults = box1*box2;
	}else (hours > 40)
		myResult= (box2 - 40) * (box1*1.5);

	results.value = myResults;



//Employee 3

var wagetext = document.getElementById('box13').value;
var hourtext = document.getElementById('box23').value;
var result3 = document.getElementById('result3');
var myResults = wagetext*hourtext;
result3.value = myResults;
