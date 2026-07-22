import { Link } from "react-router-dom";
import "./NotFound.css";

/** 존재하지 않는 경로로 접근했을 때 보여주는 페이지 */
function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">페이지를 찾을 수 없어요</h1>
      <p className="not-found__desc">아직 작성되지 않았거나 존재하지 않는 페이지예요.</p>
      <Link to="/" className="not-found__link">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
