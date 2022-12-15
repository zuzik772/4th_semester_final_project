import AmountInput from "../components/AmountInput";
import removeIcon from "../img/trash.png";
import moment from "moment/moment";
import { useState, useEffect } from "react";
export default function InventoryLine(props) {
  const [newAmount, setNewAmount] = useState(props.amount);
  const [updatedItem, setUpdatedItem] = useState({});

  function getAmount(amount) {
    setNewAmount(amount);
  }

  function updateItem() {
    setUpdatedItem({
      id: props.id,
      amount: newAmount,
    });
  }

  useEffect(() => {
    if (Object.keys(updatedItem).length) {
      props.updateInDb(updatedItem);
    }
    // eslint-disable-next-line
  }, [newAmount]);

  return (
    <tr>
      <td>{props.category}</td>
      <td>{props.item}</td>
      <td>
        <AmountInput
          amount={props.amount}
          getAmount={getAmount}
          amountUpdated={updateItem}
        />{" "}
        {props.unit}
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
