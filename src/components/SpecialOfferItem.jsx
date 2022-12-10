export default function SpecialOfferItem(props) {
  return (
    <div className="flex flex-grow flex-col bg-light p-2">
      <h4 className="uppercase font-medium">{props.title}</h4>
      <div className="grid gap-2">
        <span className="text-sm">{props.discount}</span>
        <span className="text-xs">{props.expiration}</span>
      </div>
    </div>
  );
}
