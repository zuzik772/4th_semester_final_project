import Maintitle from "../components/MainTitle";
import CTA from "../components/CTA";
import ModalDelivery from "../components/ModalDelivery";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../react-big-calendar.css";
import { useState } from "react";
export default function Deliveries() {
  const localizer = momentLocalizer(moment);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="w-full 2xl:w-3/5 p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap items-center justify-between">
        <Maintitle title="Deliveries" />
        <CTA title="Add delivery" handleCTA={handleShow} />
      </div>
      {show ? <ModalDelivery handleCTA={handleClose} /> : null}
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "100vh" }}
        events={[
          {
            allDay: false,
            end: new Date("2022-12-13T11:37:46.765Z"),
            start: new Date("2022-12-13T10:37:46.765Z"),
            title: "Vegetables",
          },
          {
            allDay: false,
            end: new Date("2022-12-12T09:00:00.000Z"),
            start: new Date("2022-12-12T04:00:00.000Z"),
            title: "Toilet paper",
          },
          {
            allDay: false,
            end: new Date("2022-12-12T22:00:00.000Z"),
            start: new Date("2022-12-12T14:00:00.000Z"),
            title: "Booking",
          },
          {
            allDay: false,
            end: new Date("2022-12-12T20:00:00.000Z"),
            start: new Date("2022-12-12T19:00:00.000Z"),
            title: "Yoga",
          },
          {
            allDay: false,
            end: new Date("2022-12-15T15:37:46.766Z"),
            start: new Date("2022-12-12T15:37:46.766Z"),
            title: "Crashpad rental",
          },
        ]}
      />
    </main>
  );
}
