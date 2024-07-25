import { Spinner } from "react-bootstrap";
import "./LoadingAnimation.css"; // File CSS để tùy chỉnh animation

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <Spinner animation="border" variant="primary" />
      <p>Chờ chút nhé...</p>
    </div>
  );
};

export default LoadingAnimation;
