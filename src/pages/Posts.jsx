import MainTitle from "../components/MainTitle";
export default function Posts(props) {
  return (
    <main className=" w-11/12 lg:w-3/5 p-0 sm:p-6 block lg:grid gap-6">
      <div>
        <MainTitle title="Posts" />
      </div>

      <div className="flex flex-col gap-2 bg-light p-6 mb-5 lg:mb-0">
        <h3 className="text-lg font-semibold">Write new post</h3>
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          className="rounded-lg outline-none p-2"
          placeholder="Write here"
        ></textarea>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span>icon</span>
            <span className="font-medium">add attachment</span>
          </div>
          <button className="bg-accent text-white rounded-lg px-4 py-1">Add post</button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Old Posts</h3>
        <div className="flex flex-col bg-light p-6 col-span-3 mb-5 lg:mb-0">
          <div className="flex gap-2">
            <span className="bg-fadedBlue w-6 h-6 p-2 rounded-full flex items-center justify-center cursor-pointerfont-bold text-xs font-medium cursor-pointer">
              AS
            </span>
            <span>Agata Szulc</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde ratione rerum illum
            magnam tenetur. Expedita, officiis illo facilis repudiandae odit nesciunt, minus harum
            laborum facere vitae eveniet aperiam libero?
          </p>
          <div className="flex">
            <span>icon</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </main>
  );
}
