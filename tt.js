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

		for(var i=0; i<list.length; i++){
			obj.table.push(list[i]);
		}
		newList.push(addItemUI);
		
		console.log("Loaded Page");
		var json = JSON.stringify(obj);
		var fs = require('fs');
		//var fs = require('fs');
		fs.writeFile('data.json',"pic :" + picInput + "text :" + textInput);
		
		
		//populate();
		addItemUI.style.visibility = "hidden";
	}
}
