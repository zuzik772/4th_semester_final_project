import Maintitle from "../components/MainTitle";
import CTA from "../components/CTA";
import ModalDelivery from "../components/ModalDelivery";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../react-big-calendar.css";
import { useState, useEffect } from "react";
export default function Deliveries(props) {
  const [show, setShow] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const localizer = momentLocalizer(moment);
  const url = "https://louisiana-2c6b.restdb.io/rest/deliveries";
  const options = {
    headers: {
      "x-apikey": "63925f89f43a573dae0953ee",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setSchedule([])
        data.filter((delivery) => delivery.location === props.location).forEach((delivery)=>{
          let newDelivery = {
            allDay: delivery.allDay,
            start: new Date(delivery.start),
            end: new Date(delivery.end),
            title: delivery.title
          }
          setSchedule(current => [...current, newDelivery]);
        })
      });
    // eslint-disable-next-line
  }, [props.location]);

  function addToSchedule(delivery) {
    if (Object.keys(delivery).length) {
      const postData = JSON.stringify(delivery);
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": "63925f89f43a573dae0953ee",
        },
        body: postData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          handleClose();
          fetch(url, options)
              .then((response) => response.json())
              .then((data) => {
                setSchedule([])
                data.filter((delivery) => delivery.location === props.location).forEach((delivery)=>{
                  let newDelivery = {
                    allDay: delivery.allDay,
                    start: new Date(delivery.start),
                    end: new Date(delivery.end),
                    title: delivery.title
                  }
                  setSchedule(current => [...current, newDelivery]);
                })
              });
            });
        };
    }

  return (
    <main className="w-full 2xl:w-3/5 p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <Maintitle title="Deliveries" />
          <p className="text-md opacity-75 mb-4">
            Check out all the upcoming deliveries in the calendar
          </p>
        </div>
        <CTA title="Add delivery" handleCTA={handleShow} />
      </div>
      {show ? (
        <ModalDelivery
          handleCTA={handleClose}
          location={props.location}
          addToSchedule={addToSchedule}
        />
      ) : null}
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
