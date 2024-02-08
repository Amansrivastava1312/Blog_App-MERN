import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingIn from './pages/SingIn'
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';
// import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
// import CreatePost from './pages/CreatePost';
// import UpdatePost from './pages/UpdatePost';
// import PostPage from './pages/PostPage';
// import ScrollToTop from './components/ScrollToTop';
// import Search from './pages/Search';
function App() {
 

  return (
   
 
 <BrowserRouter>
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SingIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      
    </BrowserRouter>
  

  
  )
}

export default App
