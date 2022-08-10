import React,{Component} from 'react';
//route 
import {Routes, Route} from 'react-router-dom';
//components 
import {Navbar,Home,Login,Movie,Network,NotFound,People,Register,TV,About} from '../../components';
class App extends Component{

    render(){
        return (
         <div>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>  
              <Route path='home' element={<Home/>}></Route>  
              <Route path ='Movie' element={<Movie/>}> </Route>
              <Route path='Tv' element={<TV/>}>  </Route>
              <Route path='People' element={<People/>}> </Route>
              <Route path='About' element={<About/>}> </Route>
              <Route path='Network' element={<Network/>}></Route>
              <Route path='Login' element={<Login/>}>  </Route>
              <Route path='Register' element={<Register/>}> </Route>
              <Route path='*' element={<NotFound/>}>    </Route>
            </Routes>
        </div>
        )
    }
}

export default App;

