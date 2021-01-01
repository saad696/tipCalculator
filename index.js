function calculateTipAmount(){
	var billAmount = document.querySelector("#billAmt").value;
var serviceQuality = document.querySelector("#serviceQual").value;
var numberOfPeople = document.querySelector("#numberOfPeople").value;

if (billAmount === "" || serviceQuality == 0 || numberOfPeople === "") {
	alert("Please fill out complete detials");
	return;
}

if (numberOfPeople <= 1) {
	document.querySelector("#each").style.display = "none";
} else{
	document.querySelector("#each").style.display = "block";
}

var total = (billAmount * serviceQuality) / numberOfPeople;
total = Math.round(total*100)/100;
total = total.toFixed(2);

document.querySelector("hr").style.display = "block";
document.querySelector("#totalTip").style.display = "block";
document.querySelector("#tip").innerHTML = total;

}

document.querySelector("hr").style.display = "none";
document.querySelector("#totalTip").style.display = "none";
document.querySelector("#each").style.display = "none";

document.querySelector("#calculate").onclick = function(){calculateTipAmount();};