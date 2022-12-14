import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import AmountInput from "../components/AmountInput";
import removeIcon from "../img/trash.png";
import RadioButton from "../components/RadioButton";
import { useState, useEffect } from "react";
import ModalInventory from "../components/ModalInventory";
import moment from "moment/moment";
export default function Inventory(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inventoryArray, setInventoryArray] = useState([]);

  const url = "https://louisiana-2c6b.restdb.io/rest/inventory-3";
  const options = {
    headers: {
      "x-apikey": "63925f89f43a573dae0953ee",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setInventoryArray(data);
      });
    // eslint-disable-next-line
  }, []);

  function postToDb(item) {
    const postData = JSON.stringify(item);
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": "63925f89f43a573dae0953ee",
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleClose();
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            setInventoryArray(data);
          });
      });
  }

  return (
    <main className="overflow-x-auto w-full 2xl:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap sm:flex-nowrap justify-between">
        <div>
          <MainTitle title="Inventory overview" />
          <p className="text-md opacity-75 mb-4">
            Check what items are we missing, you can filter by category
          </p>
        </div>
        {props.userType === "admin" && (
          <CTA title="Add item" handleCTA={handleShow} />
        )}
      </div>
      {show ? (
        <ModalInventory
          handleCTA={handleClose}
          location={props.location}
          postToDb={postToDb}
        />
      ) : null}
      <div className="flex flex-wrap gap-2 lg:gap-4 my-4 lg:my-0 text-center">
        <RadioButton title="All" />
        <RadioButton title="Beer" />
        <RadioButton title="Cleaning" />
        <RadioButton title="Coffee" />
        <RadioButton title="Food" />
        <RadioButton title="Soft drinks" />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Category</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Expiry date</th>
          </tr>
        </thead>
        <tbody>
          {inventoryArray
            .filter((item) => item.location === props.location)
            .map((item) => (
              <tr key={item._id}>
                <td>{item.category}</td>
                <td>{item.item}</td>
                <td>
                  <AmountInput amount={item.amount} /> {item.unit}
                </td>
                <td>
                  {item.expirydate &&
                    moment(item.expirydate).format("DD/MM/YYYY")}
                </td>
                {props.userType === "admin" && (
                  <td className="text-end">
                    <a
                      href={item.link}
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
                    <button>
                      <img
                        src={removeIcon}
                        alt="remove icon"
                        className="hover:bg-fadedAccent"
                      />
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
