import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Skills from './skills'
import Education from './Education'
import Additional from './Additional'
export default function Router(){
return(
<div className="Routers">
<BrowserRouter>
<ul>
    <li><Link to='/'>slills</Link></li>
    <li><Link to='/education'>education</Link></li>
    <li><Link to='/additional'>additional</Link></li>
</ul>
<Routes>
    <Route path='/' element={<Skills/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/additional' element={<Additional/>}/>
</Routes>

</BrowserRouter>




</div>
    
)

    





    
}