import MainLayout from "../layouts/MainLayout";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../components/Title";
import { PeriodButton } from "../components/Button";

export default function PeriodPage() {
  return (
    <MainLayout>
      <Title icon={faStopwatch}>기간별 보기</Title>
      <PeriodButton
        icon={faStopwatch}
        text="전 년 대비"
        prevConsume={100000}
        curConsume={200000}
      ></PeriodButton>
      <PeriodButton
        icon={faStopwatch}
        text="전 월 대비"
        prevConsume={300000}
        curConsume={200000}
      ></PeriodButton>
    </MainLayout>
  );
}
