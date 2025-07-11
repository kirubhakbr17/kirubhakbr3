
import './portfolio.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Skills from './skills'
import Education from './Education'
import Additional from './Additional'
import Home from './Home'
export default function Portfolio(){
  return <body>
    <div class="navbar">

<BrowserRouter>
<a><Link to='/'>home</Link></a>
<a> <Link to='/skills'>skills</Link></a>
<a><Link to='/education'>education</Link></a>
<a><Link to='/additional'>additional</Link></a>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/additional' element={<Additional/>}/>
</Routes>

</BrowserRouter>
</div>


</body>






 

 }   







    

