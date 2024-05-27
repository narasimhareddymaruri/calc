import {useState, useRef} from "react";

function App(){

  const [result,setResult]=useState(0);
  const inputRef=useRef(null);
  const resultRef=useRef(null);

  const plus=(e)=>{
    e.preventDefault();
    setResult(result+Number(inputRef.current.value))
  }

  const minus=(e)=>{
    e.preventDefault();
    setResult(result-Number(inputRef.current.value))

  }
  const multiply=(e)=>{
    e.preventDefault();
    setResult(result*Number(inputRef.current.value))

  }
  const division=(e)=>{
    e.preventDefault();
    setResult(result/Number(inputRef.current.value))

  }
  const resetInput=(e)=>{
    e.preventDefault();
    inputRef.current.value=0;

  }
  const resetOutput=(e)=>{
    e.preventDefault();
    setResult(0);

  }





  return (
    <form>

    <h1>Basic calculator</h1>
    <p ref={resultRef} >{result}</p>
    <input type="number" ref={inputRef} placeholder="enter input here"/>
    <div>
      <button onClick={plus}>add</button>
      <button onClick={minus}>subtract</button>
      <button onClick={multiply}>multiply</button>
      <button onClick={division}>divide</button>
      <button onClick={resetInput}>reset input</button>
      <button onClick={resetOutput}>reset output</button>
    </div>

    </form>




  )


}

export default App