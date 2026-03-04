import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../common/AuthContext';
import './Login.css';

function Login() {
  const [input, setInput] = useState({ id: '', pw: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/user.json');
      const data = await response.json();
      
      const user = data.users.find(u => u.id === input.id && u.password === input.pw);

      if (user) {
        login(user);
        alert(`${user.name}님, 환영합니다!`);
        navigate('/');
      } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
      }
    } catch (err) {
      console.error("데이터 로딩 실패:", err);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>로그인</h2>
        <input 
          name="id"
          type="text"
          placeholder="아이디" 
          value={input.id}
          onChange={handleChange} 
          required
        />
        <input 
          name="pw"
          type="password" 
          placeholder="비밀번호" 
          value={input.pw}
          onChange={handleChange} 
          required
        />
        <button type="submit" className="login-submit-btn">로그인</button>
      </form>
    </div>
  );
}

export default Login;