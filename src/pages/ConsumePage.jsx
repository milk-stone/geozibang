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

export default function ConsumePage() {
  const category = [
    ["생산성", faBolt],
    ["옷", faShirt],
    ["음식", faBowlFood],
    ["학습도구", faPencil],
    ["생활용품", faWandMagicSparkles],
  ];
  const categories = Array.from({ length: category.length }, (_, index) => (
    <CategoryButton icon={category[index][1]}>
      {category[index][0]}
    </CategoryButton>
  ));
  return (
    <MainLayout>
      <Title icon={faDollarSign}>소비 보기</Title>
      <div className={styles.category_container}>{categories}</div>
      <PriorityBox rank={1} check={0} content={"this is content: rank 1"} />
      <PriorityBox rank={2} check={1} content={"this is content: rank 2"} />
      <PriorityBox rank={3} check={1} content={"this is content: rank 3"} />
    </MainLayout>
  );
}
