import MainLayout from "../layouts/MainLayout";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../components/Title";

export default function SettingsPage() {
  return (
    <MainLayout>
      <Title icon={faGear}>환경 설정</Title>
    </MainLayout>
  );
}
