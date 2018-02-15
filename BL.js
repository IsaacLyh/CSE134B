function deleteItem(num) {
	var list = document.getElementsByClassName("item");

	for (var i = 0; i < list.length; i++) {
		console.log(list[i].id.typeof)
		console.log(num.typeof)

		if (list[i].id === num) {
			console.log("here")
		}
	}
	
}