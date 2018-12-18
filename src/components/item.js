import React, { Component } from 'react';
import Lista from './listas.js';


class Item extends Component {

  constructor(){
    super();
    this.state={
      item:[]
    }
    this.GetVauleInput = this.GetVauleInput.bind(this)
    this.GetItem = this.GetItem.bind(this)
  }
  GetVauleInput(){
    // console.log("=========================== ", this.refs.newTag.vaule);
    var newItem = this.refs.newTag.value
    var newArrayOfITems = [...this.state.item]
    newArrayOfITems.push({description:newItem})
    this.setState({
      item: newArrayOfITems
    })
    console.log('===Array', newArrayOfITems);
  }
  GetItem(){
    var newArry =this.state.item.map((item, i)=>{
      // console.log( item.description);
      return(
        <Lista
        item = {item.description}
          key = {i}
          />
      )
    })
    return newArry;
  }

  render() {
    console.log('estado -------------------------------------', this.state.item);
    return (
      <div >
        <input ref= "newTag" className="input" type="text" ></input>
          <button onClick={this.GetVauleInput}>X</button>
          <div>
          {this.GetItem()}

          </div>

      </div>
    );
  }
}

export default Item;
