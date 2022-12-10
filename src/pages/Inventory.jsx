import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import AmountInput from "../components/AmountInput";
import removeIcon from "../img/trash.png";
import FilterButton from "../components/FilterButton";
import { useState } from "react";
// import ModalInventory from "../components/ModalInventory";
import ModalRental from "../components/ModalRental";
export default function Inventory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="w-full 2xl:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap sm:flex-nowrap justify-between">
        <MainTitle title="Inventory overview" />
        <CTA title="Add item" handleModal={handleShow} />
      </div>
      {show ? <ModalRental handleModal={handleClose} /> : null}

      <div className="flex flex-wrap gap-2 my-6 text-center">
        <FilterButton title="All" />
        <FilterButton title="Bars" />
        <FilterButton title="Beer" />
        <FilterButton title="Cleaning" />
        <FilterButton title="Coffee" />
        <FilterButton title="Food" />
        <FilterButton title="Shakes" />
        <FilterButton title="Soft drinks" />
      </div>
      <table>
        <tr>
          <th>Category</th>
          <th>Item</th>
          <th>Amount</th>
          <th>Expiry date</th>
        </tr>
        <tr>
          <td>Food</td>
          <td>Bananas</td>
          <td>
            <AmountInput amount="14" /> pcs
          </td>
          <td>10/12/2022</td>
          <td>
            <CTA title="Order" />
          </td>
          <td>
            <button>
              <img src={removeIcon} alt="remove icon" className="hover:bg-fadedAccent" />
            </button>
          </td>
        </tr>

        <tr>
          <td>Food</td>
          <td>Milk</td>
          <td>
            <AmountInput amount="9" /> pcs
          </td>
          <td>15/12/2022</td>
          <td>
            <CTA title="Order" />
          </td>
          <td>
            <button>
              <img src={removeIcon} alt="remove icon" className="hover:bg-fadedAccent" />
            </button>
          </td>
        </tr>
      </table>
    </main>
  );
}
