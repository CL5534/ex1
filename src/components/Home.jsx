import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* 메인 히어로 섹션 */}
      <section className="hero">
        <div className="hero-content">
          <h1>당신의 소중한 가족을 위한<br/><span>프리미엄 애견 호텔</span></h1>
          <p>전문 훈련사와 24시간 함께하는 안전하고 즐거운 휴식 공간입니다.</p>
          <div className="hero-btns">
            <button className="btn-primary">지금 예약하기</button>
            <button className="btn-secondary">시설 둘러보기</button>
          </div>
        </div>
      </section>

      {/* 간단한 특징 소개 섹션 */}
      <section className="features">
        <div className="feature-card">
          <span>🏥</span>
          <h3>24시간 케어</h3>
          <p>전문 인력이 상주하며 아이들을 돌봅니다.</p>
        </div>
        <div className="feature-card">
          <span>🌳</span>
          <h3>넓은 놀이터</h3>
          <p>스트레스 없는 야외 활동을 보장합니다.</p>
        </div>
        <div className="feature-card">
          <span>📸</span>
          <h3>실시간 사진 전송</h3>
          <p>아이의 일상을 보호자님께 공유합니다.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;