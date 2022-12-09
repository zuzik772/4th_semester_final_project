export default function CardItem(props) {
  return (
    <div className="flex flex-col bg-light p-2">
      <h4 className="uppercase font-medium">{props.title}</h4>
      <span>{props.time}</span>
    </div>
  );
}
