import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Title } from "../components/Title";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function CalendarPage() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  useEffect(() => {
    console.log(value.$y);
    console.log(value.$M + 1);
    console.log(value.$D);
  }, [value]);

  return (
    <MainLayout>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Title icon={faCalendar}>달력 보기</Title>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </MainLayout>
  );
}
