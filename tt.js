function addItem(){
	console.log(dataList);
	var picInput = document.getElementById("pic").value;
	var textInput = document.getElementById("text").value;
	var addItemUI = document.getElementById("addItemUI");

	//var obj = {
   		//table: []
	//};

	if(picInput.length == 0 || textInput.length == 0){
		alert("please insert a valid input");
        addItemUI.style.visibility = "hidden";
	}
	else{
		var list = document.getElementsByClassName("item");

		var mydata = dataList;
		var len = mydata.length;

		list[len].innerHTML = "<img src="+picInput+" height='200' width='400' alt= 'Unable to load Image'/><br /><a href='detail_page.html'>"+textInput+"</a>"+"<br /><button onclick='deleteItem("+(len)+")'>Delete</button><hr>";
		
		dataList.push({
			"id": len,
			"pic" : picInput, 
			"text" : textInput
		})

		console.log("Loaded Page");
		//var json = JSON.stringify(obj);
		//var fs = require('fs');
		//fs.writeFile('data.json',"pic :" + picInput + "text :" + textInput);
		
		
		//populate();
		addItemUI.style.visibility = "hidden";
	}
}

function addcomment(){
	console.log("add comment");
	var comment = document.getElementById("chat").value;
	if(comment.length == 0){
		alert("please enter a valid input");	
	}
	else{
		list = document.getElementsByClassName("row");
		var current = 0;
		for(var i = 0; i < list.length; i++){
			if(list[i].innerHTML.length == 0){
				current = i;
			}
		}
		list[current].innerHTML = comment+"<button onclick='deletecomment("+current+")'>Delete</button>";

	}
}

function deletecomment(num){
	console.log(num);
	list = document.getElementsByClassName("row");

	list[num].innerHTML = "";
	
}
