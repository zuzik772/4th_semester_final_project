import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import AmountInput from "../components/AmountInput";
import removeIcon from "../img/trash.png";
import FilterButton from "../components/FilterButton";
import { useState } from "react";
import ModalInventory from "../components/ModalInventory";
export default function Inventory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="overflow-x-auto w-full 2xl:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap sm:flex-nowrap justify-between">
        <MainTitle title="Inventory overview" />
        <CTA title="Add item" handleCTA={handleShow} />
      </div>
      {show ? <ModalInventory handleCTA={handleClose} /> : null}
      <div className="flex flex-col gap-1">
        <span className="text-sm">Filter by category:</span>
        <div className="flex flex-wrap gap-4 text-center">
          <FilterButton title="All" />
          <FilterButton title="Beer" />
          <FilterButton title="Cleaning" />
          <FilterButton title="Coffee" />
          <FilterButton title="Food" />
          <FilterButton title="Soft drinks" />
        </div>
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
        </tbody>
      </table>
    </main>
  );
}
