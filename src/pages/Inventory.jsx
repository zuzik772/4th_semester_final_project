import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import AmountInput from "../components/AmountInput";
import removeIcon from "../img/trash.png";
import FilterButton from "../components/FilterButton";
import { useState, useEffect } from "react";
import ModalInventory from "../components/ModalInventory";
import moment from "moment/moment";
export default function Inventory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inventoryArray, setInventoryArray] = useState([])

  const url = "https://louisiana-2c6b.restdb.io/rest/inventory-2";
  const options = {
    headers: {
      "x-apikey": "63925f89f43a573dae0953ee",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setInventoryArray(data)
      });
  },[]);

  return (
    <main className="overflow-x-auto w-full 2xl:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap sm:flex-nowrap justify-between">
        <div>
          <MainTitle title="Inventory overview" />
          <p className="text-xs opacity-75 mb-4">
            Check what items are we missing, you can filter by category
          </p>
        </div>
        <CTA title="Add item" handleCTA={handleShow} />
      </div>
      {show ? <ModalInventory handleCTA={handleClose} /> : null}
      <div className="flex flex-wrap gap-4 text-center">
        <FilterButton title="All" />
        <FilterButton title="Beer" />
        <FilterButton title="Cleaning" />
        <FilterButton title="Coffee" />
        <FilterButton title="Food" />
        <FilterButton title="Soft drinks" />
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
          {inventoryArray.map(item=>
          <tr key={item._id}>
            <td>{item.category}</td>
            <td>{item.item}</td>
            <td>
              <AmountInput amount={item.amount} /> {item.unit}
            </td>
            <td>{moment(item.expirydate).format("DD/MM/YYYY")}</td>
            <td>
              <a href={item.link}>Order</a>
            </td>
            <td>
              <button>
                <img src={removeIcon} alt="remove icon" className="hover:bg-fadedAccent" />
              </button>
            </td>
          </tr> )}
        </tbody>
      </table>
    </main>
  );
}
