import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css"; // CSS 파일

const DELAY_MS = 2300;

export default function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/main", { replace: true }), DELAY_MS);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="start">
      <img
        src="/images/start/ieum_logo.png"
        alt="ieum"
        width="169"
        height="222"
        className="start__logo"
      />
    </div>
  );
}
