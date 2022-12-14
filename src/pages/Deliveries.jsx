import Maintitle from "../components/MainTitle";
import CTA from "../components/CTA";
import ModalDelivery from "../components/ModalDelivery";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../react-big-calendar.css";
import { useState } from "react";
export default function Deliveries(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const localizer = momentLocalizer(moment);

  let schedule = []

  if((props.location==="west")){
    schedule= [
      {
        allDay: false,
        start: new Date("2022-12-13T10:30:46.765Z"),
        end: new Date("2022-12-13T12:30:46.765Z"),
        title: "Vegetables",
      },
      {
        allDay: false,
        start: new Date("2022-12-12T04:00:00.000Z"),
        end: new Date("2022-12-12T09:00:00.000Z"),
        title: "Toilet paper",
      },
    ]
  } else {schedule=[
    {
      allDay: false,
      start: new Date("2022-12-16T10:30:46.765Z"),
      end: new Date("2022-12-16T12:30:46.765Z"),
      title: "Vegetables",
    },
    {
      allDay: false,
      start: new Date("2022-12-14T04:00:00.000Z"),
      end: new Date("2022-12-14T09:00:00.000Z"),
      title: "Toilet paper",
    },
  ]}

  return (
    <main className="w-full 2xl:w-3/5 p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <Maintitle title="Deliveries" />
          <p className="text-xs opacity-75 mb-4">
            Check out all the upcoming deliveries in the calendar
          </p>
        </div>
        <CTA title="Add delivery" handleCTA={handleShow} />
      </div>
      {show ? <ModalDelivery handleCTA={handleClose} /> : null}
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="week"
        style={{ height: "100vh" }}
        events={schedule}
      />
    </main>
  );
}
