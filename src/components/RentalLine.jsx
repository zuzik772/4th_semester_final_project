import moment from "moment/moment";
import Checkbox from "./Checkbox";
import removeIcon from "../img/trash.png";

export default function RentalLine(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.betatag}</td>
      <td className="text-center">{props.double}</td>
      <td className="text-center">{props.triple}</td>
      <td className="pl-4">{moment(props.from).format("DD/MM/YYYY")}</td>
      <td>{moment(props.to).format("DD/MM/YYYY")}</td>
      <td className="text-center">{props.double * 500 + props.triple * 500}</td>
      <td className="text-center">
        <Checkbox
          isChecked={props.paid}
          checkboxUpdates={() => props.updateRecord(props._id)}
        />
      </td>
      <td className="text-center">
        <Checkbox isChecked={props.returned} />
      </td>
      <td>
        <button onClick={() => props.removeRecord(props._id)}>
          <img
            src={removeIcon}
            alt="remove icon"
            className="hover:bg-fadedAccent"
          />
        </button>
      </td>
    </tr>
  );
}
