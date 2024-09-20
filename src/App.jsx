import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Chapter from './components/Chapter';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books/:bookId/chapters" element={<Chapter />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route index path='/' element={<Login />} />
             </Routes>
    </Router>
  );
}

export default App;
