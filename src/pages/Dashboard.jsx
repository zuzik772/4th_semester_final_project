import MainTitle from "../components/MainTitle";
import CardItem from "../components/CardItem";
import Tasks from "../components/Tasks";
import deliveries from "../img/deliveries.png";
import pig from "../img/pig.png";
import tasks from "../img/tasks.png";
import bookings from "../img/bookings.png";
import schedule from "../img/schedule.png";
import SpecialOfferItem from "../components/SpecialOfferItem";
import DashboardCardHeadline from "../components/DashboardCardHeadline";
import moment from "moment";
export default function Dashboard(props) {
  return (
    <main className="p-0 sm:p-6 sm:pr-1 block lg:grid grid-cols-4 gap-4 2xl:gap-8 w-full h-fit">
      <div className="col-span-3">
        <MainTitle title="Dashboard" />

        <span className="p-2 sm:p-0">{moment().format("MMMM Do YYYY")}</span>
      </div>
      {/* special offers */}
      <div className="col-span-3 flex flex-col sm:grid sm:grid-cols-3 gap-4 2xl:gap-8 h-fit pb-6 lg:mb-0">
        <div className="col-span-3">
          <DashboardCardHeadline
            title="Special offers"
            iconSource={pig}
            iconDescription="coin pig icon"
          />
        </div>
        <SpecialOfferItem
          title="Wildflower IPA"
          discount="50% OFF"
          expiration={"valid until 01/12/2022"}
        />
        <SpecialOfferItem
          title="Loyalty program"
          discount="10% OFF from shakes for members only"
          expiration={"valid until 31/01/2023"}
        />
        <SpecialOfferItem
          title="Christmas pass"
          discount="569kr for members only"
          expiration={"valid until 31/01/2023"}
        />
      </div>
      <div className="min-w-fit row-span-4 p-0 sm:p-2 mb-5 lg:mb-0">
        <DashboardCardHeadline title="Tasks" iconSource={tasks} iconDescription="tasks icon" />
        <Tasks location={props.location} userType={props.userType} />
      </div>
      <div className="flex flex-col gap-2 h-fit mb-5 lg:mb-0">
        <DashboardCardHeadline
          title="Bookings"
          iconSource={bookings}
          iconDescription="bookings icon"
        />
        <CardItem title="Kea" time="10:00 - 12:00" />
        <div className="grid gap-2 grid-cols-2 grid-rows-3">
          <div className="row-start-1 row-span-3">
            <CardItem title="Novo Nordisk" time="17:00 - 21:00" />
          </div>
          <div className="row-start-3">
            <CardItem title="Beginners class" time="19:00 -21:00" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-5 lg:mb-0">
        <DashboardCardHeadline
          title="Deliveries"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <div className="grid gap-2 grid-cols-2 grid-rows-3">
          <div className="row-start-1 row-span-3">
            <CardItem title="Fruits & vegetables" time="08:30 - 14:30" />
          </div>
          <div className="row-start-2">
            <CardItem title="Toilet paper" time="10:00 - 11:00" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full mb-5 lg:mb-0">
        <DashboardCardHeadline
          title="Schedule"
          iconSource={schedule}
          iconDescription="schedule icon"
        />
        <div className="grid gap-2 grid-cols-2 grid-rows-9 h-full">
          <div className="col-start-1 col-span-2 row-start-1 row-span-3">
            <CardItem title="John Smith" time="07:00 - 12:00" />
          </div>
          <div className="col-start-1 row-start-4 row-span-4 ">
            <CardItem title="Jane Doe" time="12:00 - 19:30" />
          </div>
          <div className="col-start-2 row-start-6 row-span-4 ">
            <CardItem title="Zuzana Chudinova" time="17:00 - 22:00" />
          </div>
        </div>
      </div>
    </main>
  );
}
