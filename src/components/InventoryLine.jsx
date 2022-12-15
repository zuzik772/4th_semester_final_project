import AmountInput from "../components/AmountInput";
import removeIcon from "../img/trash.png";
import moment from "moment/moment";

export default function InventoryLine(props) {
  return (
    <tr>
      <td>{props.category}</td>
      <td>{props.item}</td>
      <td>
        <AmountInput amount={props.amount} /> {props.unit}
      </td>
      <td>
        {props.expirydate ? moment(props.expirydate).format("DD/MM/YYYY") : "-"}
      </td>
      {props.userType === "admin" && (
        <td className="text-end">
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="bg-accent text-white py-1 px-6 rounded-xl hover:bg-fadedAccent hover:text-dark"
          >
            Order
          </a>
        </td>
      )}
      {props.userType === "admin" && (
        <td className="text-end">
          <button onClick={() => props.removeItem(props.id)}>
            <img
              src={removeIcon}
              alt="remove icon"
              className="hover:bg-fadedAccent"
            />
          </button>
        </td>
      )}
    </tr>
  );
}
