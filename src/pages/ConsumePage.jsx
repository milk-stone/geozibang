import MainLayout from "../layouts/MainLayout";
import { CategoryButton } from "../components/Button";
import {
  faBolt,
  faDollarSign,
  faShirt,
  faBowlFood,
  faPencil,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ConsumePage.module.scss";
import { Title } from "../components/Title";
import { PriorityBox } from "../components/PriorityBox";
import busImage from "../images/bus.png";
import cloImage from "../images/clo.png"
import foodImage from "../images/food.png";
import runImage from "../images/run.png";  
import lifeImage from "../images/life.png";
import { useState, useEffect } from "react";





export default function ConsumePage() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch("http://13.209.254.86:8080/sobi/readAll")
      .then((response) => response.json())
      .then((data) => {
        // 받아온 JSON 데이터를 상태에 저장
        setJsonData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(jsonData);


  const category = [
    ["음식", foodImage],
    ["패션", cloImage ],
    ["취미", lifeImage],
    ["건강", runImage],//
    ["교통", busImage],//
  ];
  const categories = Array.from({ length:category.length }, (_, index) => (
    <CategoryButton image={category[index][1]}>
      {category[index][0]}
    </CategoryButton>
  ));
  return (
    <MainLayout>
      <Title>소비 보기</Title>
      <div className={styles.category_container}>{categories}</div>
      <PriorityBox rank={1} check={0} content={"this is content: rank 1"} />
      <PriorityBox rank={2} check={1} content={"this is content: rank 2"} />
      <PriorityBox rank={3} check={1} content={"this is content: rank 3"} />
    </MainLayout>
  );
}
