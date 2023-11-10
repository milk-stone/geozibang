import MainLayout from "../layouts/MainLayout";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../components/Title";

export default function PeriodPage() {
  return (
    <MainLayout>
      <Title icon={faStopwatch}>지출 보기</Title>
    </MainLayout>
  );
}
