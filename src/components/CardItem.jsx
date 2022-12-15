export default function CardItem(props) {
  return (
    <div className="flex flex-col bg-light p-2  border-l-2  border-l-accent w-full h-full rounded-md">
      <h3 className="uppercase font-medium">{props.title}</h3>
      <span>{props.time}</span>
    </div>
  );
}
