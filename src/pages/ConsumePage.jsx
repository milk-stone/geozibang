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
//import { useState, useEffect } from "react";
import dummyData from "../dummy/test.json";

export default function ConsumePage() {
  const fish = [
    {
      name: "a",
      size: 20,
      age: 3,
    },
    {
      name: "b",
      size: 17,
      age: 4,
    },
    { name: "c", size: 24, age: 2 },
  ];

  console.log(fish);

  console.log(fish.filter((f) => f.age > 2));
  fish.sort((a, b) => b.age - a.age);
  console.log(fish);
  console.log(dummyData);
  const dummyArray = dummyData.map((item, index) => {
    return (
      <li key={item.index}>
        {item.id}
        {item.ranking}
        {item.category}
        {item.sobiname}
        {item.money}
        {item.check}
        {item.date.year}
        {item.date.month}
        {item.date.day}
      </li>
    );
  });
  const category = [
    ["생산성", faBolt],
    ["옷", faShirt],
    ["음식", faBowlFood],
    ["학습도구", faPencil],
    ["생활용품", faWandMagicSparkles],
  ];
  console.log(dummyArray);

  const priority_1 = dummyArray.filter((d) => d.ranking == 1);
  const priority_2 = dummyArray.filter((d) => d.ranking == 2);
  const priority_3 = dummyArray.filter((d) => d.ranking == 3);

  console.log(dummyArray.filter((d) => d.ranking == 1));
  console.log(priority_1);
  console.log(priority_2);
  console.log(priority_3);

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
