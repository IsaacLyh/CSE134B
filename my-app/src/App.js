import React, { Component } from 'react';
import './App.css';
import images from './stuffed_mushroom_pic.jpg';
import recipe from '/recipe'

class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          dataList:[{
            id: 1,
            pic: "stuffed_mushroom_pic.jpg",
            text: "Nice Mushroom"
          }]
        }
      }
      populate(){
        console.log("Loaded Page");

        var list = document.getElementsByClassName("item");
        console.log(list);
        for(var i = 0; i < this.state.dataList.length;i++){
          list[i].innerHTML ="<h1>ok</h1>" //"<img src="+this.state.dataList[i].pic+" height='200' width='400' alt= 'Unable to load Image'/><br /><a href='detail_page.html'>"+this.state.dataList[i].text+"</a>"+"<br /><button onclick='deleteItem("+ this.state.dataList[i].id +")'>Delete</button>";
        }
      }
    

  render() {
    console.log(recipe);
    return (
      <div>
        <header>
        <div id="brand">CookBook.co</div>
      </header>
      <div id="container">
          <div className="item"><img src={images} height='200' width='400' alt="unable to load"></img><br /><a href='detail_page.html'>{this.state.dataList[0].text}</a></div>
          <div className="item"></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
      </div>
      </div>
    );
  }


}

export default App;

