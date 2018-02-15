function addItem(){
	console.log(data);
	var picInput = document.getElementById("pic").value;
	var textInput = document.getElementById("text").value;
	var addItemUI = document.getElementById("addItemUI");

	var obj = {
   		table: []
	};

	if(picInput.length == 0 || textInput.length == 0){
		alert("please insert a valid input");
        addItemUI.style.visibility = "hidden";
	}
	else{
		var list = document.getElementsByClassName("item");
		var newList = [];

		var mydata = JSON.parse(data);
		var len = mydata.length;

		var index = len + 1;

		list[index].innerHTML = "<img src="+picInput+" height='200' width='400' alt= 'Unable to load Image'/><br /><a href='detail_page.html'>"+textInput+"</a>"+"<br /><button onclick='deleteItem("+index+")'>Delete</button>";
		
		console.log("Loaded Page");
		//var json = JSON.stringify(obj);
		//var fs = require('fs');
		//fs.writeFile('data.json',"pic :" + picInput + "text :" + textInput);
		
		
		//populate();
		addItemUI.style.visibility = "hidden";
	}
}
