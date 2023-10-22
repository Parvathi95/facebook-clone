import './App.css';
import Login from './Login/Login';
import { Route,Routes,BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';
import MdOndemandVideo from './Videos/MdOndemandVideo';
import FaUsers from './Users/Users'

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/login'  Component={Login}/>
      <Route path='/' Component={Header}/>
      <Route path='/videos' Component={MdOndemandVideo}/>
      <Route path='/users' Component={FaUsers}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
