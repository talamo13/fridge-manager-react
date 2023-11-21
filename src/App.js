import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MainMenu from './components/main-menu';
import Login from './components/login';
import SignUp from './components/signup';
import UserPage from './components/user-page';

function App() {
  return (
    <div className='container-fluid' style={{backgroundColor: "#574476", minHeight: "100vh", height: "100%", paddingTop: "150px", paddingLeft: "200px", paddingRight: "200px"}}>
      <Router>
        <h1 className='text-center' style={{color: "white", fontSize: "55px", fontWeight: "bold", marginBottom: "25px"}}>Fridge Manager</h1>
        <Routes>
          <Route path='/' element={<MainMenu/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path='user-page' element={<UserPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
