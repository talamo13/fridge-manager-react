import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import MainMenu from './pages/main-menu';
import Login from './pages/login';
import SignUp from './pages/signup';
import UserPage from './pages/user-page';
import CreateFridge from './pages/create-fridge';

function App() {

  return (
    <div className='container-fluid' style={{backgroundColor: "#574476", minHeight: "100vh", height: "100%", paddingTop: "150px", paddingLeft: "200px", paddingRight: "200px"}}>
      <Router>
        <Routes>
          <Route path='/' element={<MainMenu/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path='/user-page' element={<UserPage/>}></Route>
          <Route path='/create-fridge' element={<CreateFridge/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
