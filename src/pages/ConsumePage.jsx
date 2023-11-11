import MainLayout from "../layouts/MainLayout";
import { CategoryButton } from "../components/Button";
import { faBolt, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import styles from "./ConsumePage.module.scss";
import { Title } from "../components/Title";

export default function ConsumePage() {
  return (
    <MainLayout>
      <Title icon={faDollarSign}>소비 보기</Title>
      <div className={styles.category_container}>
        <CategoryButton icon={faBolt}>생산성</CategoryButton>
        <CategoryButton icon={faBolt}>생산성</CategoryButton>
        <CategoryButton icon={faBolt}>생산성</CategoryButton>
        <CategoryButton icon={faBolt}>생산성</CategoryButton>
        <CategoryButton icon={faBolt}>생산성</CategoryButton>
      </div>
      <div className={styles.prioriry_container}></div>
    </MainLayout>
  );
}
