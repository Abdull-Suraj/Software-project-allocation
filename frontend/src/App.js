import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
//import ReactDom from 'react-dom';
import { Routes, Route} from 'react-router-dom'
import Advanced from './components/Advanced'
import Simple from './components/Simple'
import Home from './components/Home'
import Schedule from './components/Schedule'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Rang from './components/Rang'

function App() {
  return (
    
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/simple"  element={<Simple />} />
          <Route path="/advanced"  element={<Advanced />} />
          <Route path="/schedule"  element={<Schedule />} />
          <Route path="/signup"  element={<SignUp />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/logout"  element={<Logout />} />
          <Route path="/rang"  element={<Rang />} />
        </Routes>
      </div>
    
  );
}

export default App;
