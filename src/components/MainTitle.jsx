export default function MainTitle(props) {
  return (
    <>
      <h1 className="font-bold text-2xl uppercase p-2 sm:p-0"> {props.title}</h1>
      <span className="p-2 sm:p-0">Tuesday, 6th of December 2022</span>
    </>
  );
}
