import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello,World!</h1>
      <FuncCump initNumber={2}></FuncCump>
      <ClassCump initNumber={2}></ClassCump>
    </div>
  );
}
function FuncCump(props){
  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number: {props.initNumber}</p>
    </div>
  );
}
class ClassCump extends React.Component{
  state={
    number:this.props.initNumber
  }
  render(){
    return (
      <div className='container'>
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
          }>
        </input>
      </div>
    );
  }
}

export default App;
