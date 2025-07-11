import './E-commerce.css'
export default function Ecommerce(){
return(
<>

<div id="div">
<form><label>FirstName</label>
    <input className='box'type="text" placeholder='Enter FirstName'></input>
<label>LastName</label>
    <input className='box'type="text"placeholder='Enter LastName'></input>
<label>Address</label>
    <input className='box' type="text" placeholder='Enter Address'></input>
<label>Email</label>
    <input className='box'type="email" placeholder='Enter Email'></input>
<label>Mobile</label>
    <input className='box' type="number" placeholder='Enter MobileNumber'></input><br></br>
      </form>
      <div id='buttons'><button id='submit'>Login</button>
      <button id='cancelbtn'>cancel</button></div>
</div>





</>


)







}