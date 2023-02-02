import React ,{useState}from 'react';
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
    var numberState=useState(props.initNumber);
    var number =numberState[0]; /**상태값 */
    var setNumber=numberState[1]; /**상태를 바꿀 수 있는 함수 */

    // var dateState=useState((new Date()).toString());
    // var _date =dateState[0]; /**상태값 */
    // var setDate=dateState[1]; /**상태를 바꿀 수 있는 함수 */
    //위 3줄의 코드를 한 줄로 줄이기 (아래)
    var [_date,setDate] = useState((new Date().toString()));
    
  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>DateL{_date}</p>
    <input type="button" value="random" onClick={
      function(){
        setNumber(Math.random());
        setDate((new Date()).toString());
      }
      }>
    </input>
    </div>
  );
}
class ClassCump extends React.Component{
  state={
    number:this.props.initNumber,
    date:(new Date()).toString()
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
        <p>Date :{this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({date:(new Date().toString())})
          }.bind(this)
          }>
        </input>
      </div>
    );
  }
}

export default App;
