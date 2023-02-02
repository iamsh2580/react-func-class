import React ,{useState,useEffect}from 'react';
import './App.css';

function App() {
  var [funcShow,setFuncShow]= useState(true);
  var [classShow,setClasscShow]= useState(true);

  return (
    <div className="container">
      <h1>Hello,World!</h1>
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove comp " onClick={function(){
      setClasscShow(false);
      }}></input>
      {funcShow ? <FuncCump initNumber={2}></FuncCump> : null}
      {classShow ?<ClassCump initNumber={2}></ClassCump>:null}
    </div>
  );
}
var funcStyle='color:blue';
var funcId=0;

function FuncCump(props){
    var numberState=useState(props.initNumber);
    var number =numberState[0]; /**상태값 */
    var setNumber=numberState[1]; /**상태를 바꿀 수 있는 함수 */

    // var dateState=useState((new Date()).toString());
    // var _date =dateState[0]; /**상태값 */
    // var setDate=dateState[1]; /**상태를 바꿀 수 있는 함수 */
    //위 3줄의 코드를 한 줄로 줄이기 (아래)
    var [_date,setDate] = useState((new Date().toString()));
    //sideEffect
    useEffect(function(){
      console.log('%cfunc=>useEffect  (componentDidMount)'+(++funcId),funcStyle);
      document.title=number;
     return function(){
       console.log('%cfunc=>useEffect return (componentWillUnMount)'+(++funcId),funcStyle);
      }// eslint-disable-next-line
    },[]); ///딱 한번만 실행되돌록

    useEffect(function(){
      console.log('%cfunc=>useEffect number (componentDidMount & componentDidUpdate)'+(++funcId),funcStyle);
      document.title=number;
     return function(){
       console.log('%cfunc=>useEffect (componentDidMount & componentDidUpdate)'+(++funcId),funcStyle);
      }
    },[number]); //number가 바꼇을때만 callback함수 호출

    useEffect(function(){
      console.log('%cfunc=>useEffect date(componentDidMount & componentDidUpdate)'+(++funcId),funcStyle);
      document.title=_date;
     return function(){
       console.log('%cfunc=>useEffect (componentDidMount & componentDidUpdate)'+(++funcId),funcStyle);
      }
    },[_date]); //number가 바꼇을때만 callback함수 호출

    console.log('%cfunc=>render'+(++funcId),funcStyle);
  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>DateL{_date}</p>
    <input type="button" value="random" onClick={
      function(){
        setNumber(Math.random());
      }
      }>
    </input>
    <input type="button" value="date" onClick={
      function(){
        setDate((new Date()).toString());
      }
      }>
    </input>
    </div>
  );
}

var classStyle='color:red';
class ClassCump extends React.Component{
  state={
    number:this.props.initNumber,
    date:(new Date()).toString()
  }
  componentWillMount(){ //랜더 전 실행됨
  console.log('%cclass => componentWillMount',classStyle);
}
  componentDidMount(){
  console.log('%cclass => componentDidMount',classStyle);
}

  render(){
    console.log('%cclass=>render',classStyle);
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
