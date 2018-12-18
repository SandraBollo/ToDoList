// import React, { Component } from 'react';
//
//
// class List extends Component {
//   constructor(){
//     super();
//     this.state = {
//
//       nuevoestado: false
//     }
//     this._Example = this._Example.bind(this);
//     this._Change =this._Change.bind(this);
//   }
//
//   _Example(){
//
//     this.setState({
//       nuevoestado: true
//     })
//     // console.log("hola");
//   }
//   _Change(Todo){
//     console.log("todo",Todo);
//   }
//
//   render() {
//     // console.log(this.refs.newTag.vaule);
//
//     console.log( this.state.nuevoestado)
//     return (
//       <div>
//         <div>
//           <input ref= "newTag" className="input" vaule={this.state.value} onChange={this._Change}></input>
//           <button onClick={()=>this._Example(this.state.vaule)}>X</button>
//         </div>
//
//       </div>
//     );
//   }
// }
//
// export default List;
