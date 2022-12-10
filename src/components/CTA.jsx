export default function CTA(props) {
  return (
    <button onClick={props.handleModal} className="bg-accent text-white rounded-lg px-4 py-1 h-fit">
      {props.title}
    </button>
  );
}
