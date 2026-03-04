import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);                                         // 인증 데이터 보관함 생성

export const useAuth = () => {                                                  // 다른 컴포넌트용 커스텀 훅
  const context = useContext(AuthContext);                                      // 보관함(Context) 연결
  if (!context) {                                                               // Provider 밖에서 호출 시
    throw new Error('useAuth는 AuthProvider 안에서만 사용해야 합니다.');        // 에러 발생 (디버깅용)
  }
  return context;                                                               // 인증 데이터 반환
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {                                      // 새로고침 시 초기화 로직
    const token = localStorage.getItem('authToken');                            // 금고에서 토큰 추출
    if (token) {
      try {
        return JSON.parse(decodeURIComponent(escape(atob(token))));             
      } catch (error) {
        console.error("잘못된 토큰입니다:", error);
        localStorage.removeItem('authToken');                                   // 잘못된 데이터는 삭제
        return null;
      }
    }
    return null;                                                                // 토큰 없으면 빈 상태
  });

  const login = (userData) => {
    const userToStore = {                                                       // 저장할 정보만 선별
      id: userData.id,                                                          // 아이디 포함
      name: userData.name                                                       // 이름 포함 (비밀번호는 제외)
    };

    // [인코딩] 객체 -> JSON 문자열 -> Base64 변환 (개인정보 노출 방지)
    const token = btoa(unescape(encodeURIComponent(JSON.stringify(userToStore))));
    
    localStorage.setItem('authToken', token);                                   // 로컬 스토리지에 토큰만 저장
    setUser(userToStore);                                                       // 앱 상태 업데이트 (화면 반영)
  };

  const logout = () => {
    localStorage.removeItem('authToken');                                       // 스토리지 토큰 삭제
    setUser(null);                                                              // 사용자 정보 비움
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>                   
      {children}                                                             
    </AuthContext.Provider>
  );
};