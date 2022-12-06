import MainTitle from "../components/MainTitle";
import Cards from "../components/Cards";
import Tasks from "../components/Tasks";
import Schedule from "../components/Schedule";

export default function Dashboard() {
  return (
    <main className="p-4 grid grid-cols-4 w-screen">
      <div className="col-span-4">
        <MainTitle title="date for dashboard" />
      </div>
      <Cards />
      <Cards />
      <Cards />
      <Tasks />
      <div>
        <Schedule />
      </div>
    </main>
  );
}
