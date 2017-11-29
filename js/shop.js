// var customername="Chaky";
// var price=10;
// var quantity=3;
// var totalPrice= price*quantity;

// document.getElementById("customer-name").innerHTML = "Chaky";
// document.getElementById("price").innerHTML = "$" + totalPrice;


var products =[
	"Pizza",
	"Naan",
	"Sourdough",
	"Foccacia",
	"iPhone X"
];

var price =[40,10,20,80,1000];

var productsText= "";
var productsElement = document.getElementById("product-list");

for (var i=0 ; i<5 ; i++){
productsText += "<li class='list-group-item'>"+ products[i]+"<span class='badge'>$"+price[i]+"</span></li>";
}

productsElement.innerHTML = productsText;
// --------------------------------------------------------

var total = 0;
var totalPrice = document.getElementById("price");

for (var i=0 ; i<5 ; i++){
	total += price[i];
}

var discount = total*0.75;

totalPrice.innerHTML = "$" + discount + " <span class='badge progress-bar-info'>25% off</span>"; 
//----------------------------------------------------------

var day = new Date(); //get 1-31
var hr = day.getHours(); //get 0-23

if (hr>=6 && hr<12){
	document.getElementById("sayhi").innerHTML = "Good Morning, <span id='customer-name'>Salisa</span>!";
} 
else if (hr>=12 && hr<18){
	document.getElementById("sayhi").innerHTML = "Good Afternoon, <span id='customer-name'>Salisa</span>!";
}
else {
	document.getElementById("sayhi").innerHTML = "Good Evening, <span id='customer-name'>Salisa</span>!";
}


