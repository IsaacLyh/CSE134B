function search(){
  console.log("searching");
  var input = document.getElementById("searchBox").value;

  if(input.length!=0){
    var list = document.getElementsByClassName("item");
    var result = [];
    var count =0;
    for(var i = 0; i < list.length;i++){
      //console.log(list[i].getElementsByTagName("a").value);
      if(list[i].innerHTML.includes(input)){
        console.log(count);
        result.push(list[i]);
        count++;
      }
    }
    console.log("Showing search result");
    repopulate(result);
  }
  else{
    console.log("reloading original page");
    populate();
  }
}

function repopulate(list){
  //console.log(list.length);
  //alert(list.length);
  if(list.length != 0){
    var original = document.getElementsByClassName("item");
    var pos = 0;
    for(var i = 0; i<list.length;i++){
      pos++;
      //console.log(original[i].innerHTML);
      original[i].innerHTML = list[i].innerHTML;
      console.log("pos="+pos);
    }
    for(var j = pos; j < original.length; j++){
      console.log(j);
      original[j].innerHTML = "";
    }
  }
  else{
    console.log("found no result");
    var original = document.getElementsByClassName("item");
    for(var j = 0; j < original.length; j++){
      original[j].innerHTML = "";
    } 
  }
}