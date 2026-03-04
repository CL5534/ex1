import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './common/AuthContext';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';


function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<div>소개 페이지입니다.</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App