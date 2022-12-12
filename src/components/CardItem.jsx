export default function CardItem(props) {
  return (
    <div className="flex flex-col bg-light p-2  border-l-2  border-l-accent w-full h-full rounded-md">
      <h4 className="uppercase font-medium">{props.title}</h4>
      <span>{props.time}</span>
    </div>
  );
}
