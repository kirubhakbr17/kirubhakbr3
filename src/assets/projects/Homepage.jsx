
import { useReducer } from 'react'
import './E-commerce.css'

export default function Homepage(){
    
    <img id='img2' src='src/assets/projects/super giant.jpg'></img>
  let image1=document.getElementById('img2')
    const [state,Setstate]=useReducer(Reducer,state=image1)
   function Reducer(state,action){
 switch (action.type) {
        case 'increment':
            return (state= <img  id='img3'src='src/assets/projects/whitedwarf.jpg'></img>)
        case 'decrement':
            return (state=<img src='src/assets/projects/super giant.jpg'></img>)
        default:
            break;
    }
  }
  return(<>
    <h1> trendy mens wear</h1>
    <header >
        <nav>
             <ul>
         <li id='menu' onClick={Menuitem}>Menu</li>   
        <li className='rightbar'>Home</li>
        <li className='rightbar'>Orders</li>
        <li className='rightbar'>Login</li>
        </ul>
        </nav>
       
 </header>
 <body>
    <div id='menubox'>
        <button>Shirts</button>
        <button>T-shirts</button>
        <button>pants</button>
        <button>shoes</button>
        <button>watches</button>
    </div>

<div id='product'>
<button id='increasebtn'onClick={() => Setstate({ type: "increment"})}>+</button>
{state}
<button id='decreasebtn'onClick={() => Setstate({ type: "decrement"})}>+</button>

</div>


 </body>
 
   
   
   
   
   
    
   
   
    </>)
    
   
   function Menuitem(){
       let menu= document.getElementById('menubox')
       menu.style.display='block'
    }
  
  
    


}