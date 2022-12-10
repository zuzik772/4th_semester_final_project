import MainTitle from "../components/MainTitle";
import matcha1 from "../img/matcha1.webp";
import matcha2 from "../img/matcha2.webp";
import matcha3 from "../img/matcha3.webp";
import SeenByPeople from "../components/icons/SeenByPeople";
import Attachment from "../components/icons/Attachment";
import CTA from "../components/CTA";
export default function Posts(props) {
  return (
    <main className="w-full lg:w-3/5 p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div>
        <MainTitle title="Posts" />
      </div>

      <div className="flex flex-col gap-2 bg-light p-5 mb-5 lg:mb-0">
        <h3 className="text-lg font-semibold">Write new post</h3>
        <textarea
          name="post"
          id="post"
          cols="30"
          rows="3"
          className="rounded-lg outline-none p-2"
          placeholder="Write here"
        ></textarea>
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
          <div className="flex items-center">
            <Attachment />
            <span className="font-medium text-sm">add attachment</span>
          </div>
          <CTA title="Add post" />
        </div>
      </div>
      {/* new posts */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">New Posts</h3>
        <div className="flex flex-col gap-2 bg-light p-5 col-span-3 mb-5 lg:mb-0">
          <div className="flex gap-2 items-center">
            <span className="bg-fadedBlue w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointerfont-bold text-md font-medium cursor-pointer">
              AS
            </span>
            <div className="flex flex-col ">
              <span className="font-medium">Agata Szulc</span>
              <span className="font-light text-xs">22. nov 2022 9:58</span>
            </div>
          </div>
          <h4 className="text-md font-medium mt-2">Ventilation</h4>
          <p>
            The ventilation will automatically start before your shift starts. The times are
            automatic during weekdays - 6am to 8am and weekend - 7am to 9am. When you arrive - leave
            it on for the period you are there and let me know if it correctly turns off at the time
            above.
          </p>
          <p>
            If it doesn't or does let me know please so I can reprogram it for the morning earlier
            (not to disturb customers)
          </p>

          <div className="flex gap-1 items-center justify-end">
            <SeenByPeople />
            <span className="font-medium text-sm">10</span>
          </div>
        </div>
      </div>
      {/* old posts */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Old Posts</h3>
        <div className="flex flex-col gap-2 bg-light p-5 col-span-3 mb-5 lg:mb-0">
          <div className="flex gap-2 items-center">
            <span className="bg-fadedBlue w-10 h-10 p-2 rounded-full flex items-center justify-center cursor-pointerfont-bold text-md font-medium cursor-pointer">
              AS
            </span>
            <div className="flex flex-col ">
              <span className="font-medium">Agata Szulc</span>
              <span className="font-light text-xs">22. nov 2022 9:58</span>
            </div>
          </div>
          <h4 className="text-md font-medium mt-2">Now we sell matcha! Price is 40kr.</h4>

          <ol className="list-decimal pl-4 text-sm leading-6">
            <li>Mix 1 tablespoon of matcha in yellow cup</li>
            <li>Pour a tiny bit hot water for 2 seconds from the coffee machine</li>
            <li>Whisk it well to dissolve the matcha (with wooden whisk)</li>
            <li>Steam the (oat) milk (Big pitcher filled up to the spout)</li>
            <li>Pour the milk on top of the dissolved matcha</li>
            <li>After making matcha, make sure to properly clean wooden whisk with hot water.</li>
          </ol>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 justify-center">
            <figure>
              <img src={matcha1} alt="instruction of how to make matcha" className="w-fit" />
              <figcaption>step 1</figcaption>
            </figure>
            <figure>
              <img src={matcha2} alt="instruction of how to make matcha" className="w-fit" />
              <figcaption>step 2</figcaption>
            </figure>

            <figure>
              <img src={matcha3} alt="instruction of how to make matcha" className="w-fit" />
              <figcaption>step 3</figcaption>
            </figure>
          </div>

          <div className="flex gap-1 items-center justify-end">
            <SeenByPeople />
            <span className="font-medium text-sm">21</span>
          </div>
        </div>
      </div>
    </main>
  );
}
