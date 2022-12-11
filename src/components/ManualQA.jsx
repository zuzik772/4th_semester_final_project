export default function ManualQA(props) {
  return (
    <div>
      <p className="font-medium">{props.question}</p>
      <p>{props.answer}</p>
    </div>
  );
}
