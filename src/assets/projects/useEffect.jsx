import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Timer() {
  const [count, setCount] = useState(0);
const [increase,setincrease]=useState(1)
  useEffect(() => {
    
      setincrease( count * 2);
  
  },[count]);
console.log("rendering")
 
return (<><h1>I have rendered {count} times!</h1>;
<h2>increase{increase}</h2>
<button onClick={()=>setCount(count+1)}>increase</button>

</>)
  

}
