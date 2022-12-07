export default function DashboardSubtitle(props) {
  return (
    <div className="flex gap-1 uppercase font-semibold p-2 sm:p-0">
      <img
        src={props.iconSource}
        alt={props.iconDescription}
        className="border-b-4 border-accent "
      />
      <h3>{props.title}</h3>
    </div>
  );
}
