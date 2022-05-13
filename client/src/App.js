import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Essensanmeldung from './components/Essensanmeldung/Essensanmeldung';
import Kahnbuch from './components/Kahnbuch/Kahnbuch';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Err404 from './components/Err404/Err404';
import Authenticate from './components/Auth/Authenticate';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header Link={Link}/>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/essen" element={<Essensanmeldung/>}/>
          <Route path="/kahn" element={<Kahnbuch />} /> 
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Err404 Link={Link}/>}/>
          <Route path="/authenticate" element={<Authenticate/>}/>
        </Routes>
        <Footer Link={Link} />
      </BrowserRouter>
    </>
  );
}

export default App;
