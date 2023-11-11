import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main>
      <div className={styles.blob_container}>
        <img src={process.env.PUBLIC_URL + "/img/blob.svg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/img/blob1.svg"} alt="" />
      </div>

      <div className={styles.wrapper}>
        <h1>
          <span>청년들의</span>
          <span>소비</span>
          <span>기록장</span>
        </h1>
        <Button onClick={() => navigate("/consume")}>시작하기</Button>
      </div>
    </main>
  );
}
