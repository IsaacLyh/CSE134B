function deleteItem(num) {

	console.log(num)

	for (var i = 0; i < dataList.length; i++) {
		if (dataList[i].id === num) {
			console.log("here")

			dataList.splice(num, 1);
			// console.log(dataList);
		}
	}

	refresh(dataList);

	
}

function refresh(list){

	console.log(list);


  	if (list.length != 0){
    	var original = document.getElementsByClassName("item");
    	      console.log(original);

    	for(var j = 0; j < original.length; j++){
      		original[j].innerHTML = "";
    	}

    	for (var i = 0; i<list.length;i++){
    		list[i].id = i;

      		original[i].innerHTML = "<img src="+list[i].pic+" height='200' width='400' alt= 'Unable to load Image'/><br /><a href='detail_page.html'>"+list[i].text+"</a>"+"<br /><button onclick='deleteItem("+ list[i].id +")'>Delete</button>";
    	}

    	
    
	} else {
	    console.log("found no result");
	    var original = document.getElementsByClassName("item");
	    for (var j = 0; j < original.length; j++){
	      original[j].innerHTML = "";
	    } 
  	}
}