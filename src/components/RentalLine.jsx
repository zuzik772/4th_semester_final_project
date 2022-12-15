import moment from "moment/moment";
import Checkbox from "./Checkbox";
import removeIcon from "../img/trash.png";
import { useState, useEffect } from "react";
export default function RentalLine(props) {
  const [updatedRecord, setUpdatedRecord] = useState({});
  const [isPaid, setIsPaid] = useState(props.paid);
  const [isReturned, setIsReturned] = useState(props.returned);

  function getCheckboxStatePaid(state) {
    setIsPaid(state);
  }

  function getCheckboxStateReturned(state) {
    setIsReturned(state);
  }

  function updatePaid() {
    setUpdatedRecord({
      id: props.id,
      paid: !isPaid,
    });
  }

  function updateReturned() {
    setUpdatedRecord({
        id: props.id,
        returned: !isReturned,
      });
  }

  useEffect(() => {
    if (Object.keys(updatedRecord).length) props.updateInDb(updatedRecord);
    // eslint-disable-next-line
  }, [updatedRecord]);

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
          isChecked={isPaid}
          checkboxUpdated={updatePaid}
          getCheckboxState={getCheckboxStatePaid}
        />
      </td>
      <td className="text-center">
        <Checkbox
          isChecked={isReturned}
          checkboxUpdated={updateReturned}
          getCheckboxState={getCheckboxStateReturned}
        />
      </td>
      <td>
        <button onClick={() => props.removeRecord(props.id)}>
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
