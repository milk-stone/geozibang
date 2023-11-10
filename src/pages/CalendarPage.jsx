import { Title } from "../components/Title";
import MainLayout from "../layouts/MainLayout";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function CalendarPage() {
  return (
    <MainLayout>
      <Title icon={faCalendar}>달력 보기</Title>
    </MainLayout>
  );
}
