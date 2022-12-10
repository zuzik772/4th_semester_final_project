export default function CTA(props) {
  return (
    <button onClick={props.handleCTA} className="bg-accent text-white rounded-lg px-4 py-1 h-fit">
      {props.title}
    </button>
  );
}
