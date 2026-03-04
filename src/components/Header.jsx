import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../common/AuthContext';
import './Header.css';

function Header() {
  const { user, logout } = useAuth(); // Context에서 상태와 함수를 바로 가져옴
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Context의 로그아웃 함수 호출
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">🐾 애견호텔</Link>
      </div>

      <nav className="nav-menu">
        <ul>
          <li><Link to="/rooms">객실소개</Link></li>
          <li><Link to="/services">서비스</Link></li>
          <li><Link to="/reservation">예약하기</Link></li>
        </ul>
      </nav>

      <div className="nav-auth">
        {user ? (
          /* 로그인 했을 때 보여줄 화면 */
          <div className="user-info">
            <span><strong>{user.name}</strong> 님</span>
            <button onClick={handleLogout} className="logout-btn">로그아웃</button>
          </div>
        ) : (
          /* 로그인 안 했을 때 보여줄 화면 */
          <Link to="/login" className="login-btn">로그인</Link>
        )}
      </div>
    </header>
  );
}

export default Header;