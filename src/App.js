
import './App.css';
import Appbar from './components/Appbar';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Sign from './components/Sign';
import Homee from './components/Homee';
import Dash from './components/Dash';
import Test from './components/Test';
import Teest from './components/Teest';




function App() {
  
  return (
    
    <div className="App">
 

<Appbar/>
<Routes>

  <Route path='/login' element={<Login/>}/>
  <Route path='/sign' element={<Sign/>}/>
  <Route path='/dash' element={<Dash/>}/>
  <Route path='/' element={<Homee/>}/>
</Routes>
    </div>
  );
}

export default App;
