import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="container">
      <div className="card">
        <h1>Programmatic Navigation 챌린지</h1>
        <p>폼 제출 후, 프로그래밍 방식으로 페이지를 이동시키는 방법을 연습해보세요.</p>
        <Link to="/contact" className="submit-button" style={{ textDecoration: 'none' }}>
          문의하기 페이지로 이동
        </Link>
      </div>
    </div>
  );
}
