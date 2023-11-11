<<<<<<< HEAD
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

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
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </LocalizationProvider>
        </MainLayout>
    );
=======
import { Title } from "../components/Title";
import MainLayout from "../layouts/MainLayout";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function CalendarPage() {
  return (
    <MainLayout>
      <Title icon={faCalendar}>달력 보기</Title>
    </MainLayout>
  );
>>>>>>> 10661df31fb96b2c7e582d4fa2a38ff051fe837c
}
