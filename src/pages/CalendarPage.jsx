import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Title } from "../components/Title";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  CalendarDate,
  CalendarEvent,
  CalendarEventContainer,
} from "../components/Calendar";

export default function CalendarPage() {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [day, setDay] = useState(currentDate.getMonth() + 1);

  const [data, setData] = useState(null);
  const [status, setStatus] = useState("fetching");

  const [value, setValue] = useState(dayjs());

  //오늘 날짜 기준으로 state 설정

  useEffect(() => {
    console.log(year, month, day);

    // (async () => {
    //     try {
    //         const request = await fetch(`http://13.209.254.86:8080/sobi/month/readDate/${year}/${month}/${day}/`);
    //         setData(request.json());
    //         setStatus("success");
    //         console.log(request.json());
    //     } catch (e) {
    //         setData(null);
    //         setStatus("failed");
    //         console.log(e);
    //     }
    // })();
    fetch(
      `http://13.209.254.86:8080/sobi/month/readDate/${year}/${month}/${day}/`
    )
      .then((response) => {
        if (response.status === 500) {
          throw new Error("status code 500");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setData(null);
        setStatus("failed");
      });
  }, [value, year, month, day]);

  useEffect(() => {
    console.log(status);
  }, [status]);

  const handleDateChange = (newValue) => {
    setValue(newValue);
    setYear(newValue.year()); // year 업데이트
    setMonth(newValue.month() + 1); // month 업데이트
    setDay(newValue.date()); // day 업데이트
  };

  return (
    <MainLayout>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Title>달력 보기</Title>
        <DateCalendar value={value} onChange={handleDateChange} />
      </LocalizationProvider>

      <CalendarEventContainer>
        <CalendarDate date={day} />
        {status === "success"
          ? data.map((element, index) => {
              return (
                <CalendarEvent key={index} money={element.money}>
                  {element.sobiname}
                </CalendarEvent>
              );
            })
          : null}
      </CalendarEventContainer>
    </MainLayout>
  );
}
