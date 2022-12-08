import MainTitle from "../components/MainTitle";
import Cards from "../components/Cards";
import Tasks from "../components/Tasks";
import Schedule from "../components/Schedule";
import deliveries from "../img/deliveries.png";
import SpecialOfferItem from "../components/SpecialOfferItem";
import DashboardSubtitle from "../components/DashboardSubtitle";
export default function Dashboard() {
  return (
    <main className="p-0 sm:p-6 block lg:grid grid-cols-4 gap-6 w-full h-fit">
      <div className="col-span-3">
        <MainTitle title="Dashboard" date={"Tuesday, 6th of December 2022"} />
      </div>
      <div className="row-span-3 p-0 sm:p-2 mb-5 lg:mb-0">
        <DashboardSubtitle
          title="Tasks"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Tasks />
      </div>
      <div className="flex flex-col gap-4 h-fit bg-light p-2 sm:p-6 mb-5 lg:mb-0">
        <DashboardSubtitle
          title="Bookings"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Cards />
      </div>
      <div className="flex flex-col gap-4 h-fit bg-light p-2 sm:p-6 mb-5 lg:mb-0">
        <DashboardSubtitle
          title="Deliveries"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Cards />
      </div>
      <div className="flex flex-col gap-4 h-fit py-6 pl-4 border-l-2 border-accent rounded-none mb-5 lg:mb-0">
        <DashboardSubtitle
          title="Special offers"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        {/* <div className="flex gap-1 uppercase font-semibold">
          <img src={deliveries} alt="deliveries icon" className="border-b-4 border-accent " />
          <h3>Special offers</h3>
        </div> */}
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

      <div className=" bg-light p-6 col-span-3 mb-5 lg:mb-0">
        <DashboardSubtitle
          title="Schedule"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Schedule />
      </div>
    </main>
  );
}
