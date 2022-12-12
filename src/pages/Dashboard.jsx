import MainTitle from "../components/MainTitle";
import Cards from "../components/Cards";
import Tasks from "../components/Tasks";
import deliveries from "../img/deliveries.png";
import SpecialOfferItem from "../components/SpecialOfferItem";
import DashboardCardHeadline from "../components/DashboardCardHeadline";
import moment from "moment";
export default function Dashboard() {
  return (
    <main className="p-0 sm:p-6 sm:pr-1 block lg:grid grid-cols-4 gap-6 w-full h-fit">
      <div className="col-span-3">
        <MainTitle title="Dashboard" />

        <span className="p-2 sm:p-0">{moment().format("MMMM Do YYYY")}</span>
      </div>
      <div className="min-w-fit row-span-4 p-0 sm:p-2 mb-5 lg:mb-0">
        <DashboardCardHeadline
          title="Tasks"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Tasks />
      </div>
      <div className="flex flex-col gap-4 h-fit p-2 sm:p-6 mb-5 lg:mb-0">
        <DashboardCardHeadline
          title="Bookings"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Cards />
      </div>
      <div className="flex flex-col gap-4 h-fit p-2 sm:p-6 mb-5 lg:mb-0">
        <DashboardCardHeadline
          title="Deliveries"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Cards />
      </div>
      <div className="flex flex-col gap-4 h-fit p-2 sm:p-6 mb-5 lg:mb-0">
        <DashboardCardHeadline
          title="Schedule"
          iconSource={deliveries}
          iconDescription="deliveries icon"
        />
        <Cards />
      </div>

      {/* special offers */}
      <div className="col-span-3 grid grid-cols-3 gap-4 h-fit py-6 pl-4 mb-5 lg:mb-0">
        <div className="col-span-3">
          <DashboardCardHeadline
            title="Special offers"
            iconSource={deliveries}
            iconDescription="deliveries icon"
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
    </main>
  );
}
