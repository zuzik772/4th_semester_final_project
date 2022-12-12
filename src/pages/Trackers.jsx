import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import removeIcon from "../img/trash.png";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import ModalRental from "../components/ModalRental";

export default function Trackers() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <main className="overflow-x-auto w-full 2xl:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <MainTitle title="Crashpad rental" />
            <p className="text-xs opacity-75 mb-4">
              The records are sorted from newest to oldest and the deposit is calculated
              automatically, so don’t worry about it.
            </p>
          </div>
          <CTA title="Add rental " handleCTA={handleShow} />
        </div>
        {show ? <ModalRental handleCTA={handleClose} /> : null}

        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Beta tag</th>
              <th>Double</th>
              <th>Triple</th>
              <th>From</th>
              <th>To</th>
              <th>Deposit</th>
              <th>Deposit paid</th>
              <th>Deposit returned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Smith</td>
              <td>BETA5147625</td>
              <td>0</td>
              <td>1</td>
              <td>29/11/2022</td>
              <td>02/12/2022</td>
              <td>500</td>
              <td>
                <Checkbox />
              </td>
              <td>
                <Checkbox />
              </td>
              <td>
                <button>
                  <img src={removeIcon} alt="remove icon" className="hover:bg-fadedAccent" />
                </button>
              </td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>BETA5147625</td>
              <td>0</td>
              <td>1</td>
              <td>30/11/2022</td>
              <td>02/12/2022</td>
              <td>500</td>
              <td>
                <Checkbox />
              </td>
              <td>
                <Checkbox />
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
    </>
  );
}
