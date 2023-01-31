import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello,World!</h1>
      <FuncCump></FuncCump>
      <ClassCump></ClassCump>
    </div>
  );
}
function FuncCump(){
  return (
    <div className='container'>
      <h2>function style component</h2>
    </div>
  );
}
class ClassCump extends React.Component{
  render(){
    return (
      <div className='container'>
        <h2>class style component</h2>
      </div>
    );
  }
}

export default App;
