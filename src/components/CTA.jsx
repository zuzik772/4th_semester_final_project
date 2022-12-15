export default function CTA(props) {
  return (
    <button
      onClick={props.handleCTA}
      className="bg-accent text-white rounded-lg px-4 py-1 mb-4 sm:mb-0 h-fit"
    >
      {props.title}
    </button>
  );
}
