import Maintitle from "../components/MainTitle";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "../react-big-calendar.css"
export default function Deliveries() {

  const localizer = momentLocalizer(moment)

  return (
    <>
      <Maintitle title="date for deliveries" />
      <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          style={{ height: "100vh" }}
          events={[
            {
              start: moment().toDate(),
              end: moment()
                .add(1, "days")
                .toDate(),
              title: "Some title"
            }
          ]}
        />
    </>
  );
}
