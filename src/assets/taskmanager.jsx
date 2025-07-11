import { useReducer } from "react"

function Increment(initial,action){
switch (action.type) {
    case 'increment':
        return{count:initial.count+1}
       case 'decrement':
        return{count:initial.count-1} 
    default:
        break;
}

}

 export default function Usereducer(){
          const[state,update] =useReducer(Increment,{count:0}) 
     
     
     
     return (<>  
    <p>count:{state.count}</p>
    <button onClick={()=>update({type:'increment'})}>increment</button>
    <button onClick={()=>update({type:'decrement'})}>decrement</button>
    
    
    </>)
}