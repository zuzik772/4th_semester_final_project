import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import removeIcon from "../img/trash.png";
import { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import ModalRental from "../components/ModalRental";
import moment from "moment/moment";

export default function Trackers() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rentalArray, setRentalArray] = useState([])

  const url = "https://louisiana-2c6b.restdb.io/rest/crashpad-2?sort=from&dir=-1";
  const options = {
    headers: {
      "x-apikey": "63925f89f43a573dae0953ee",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setRentalArray(data)
      });
  },[]);

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
            {rentalArray.map(record=>
            <tr key={record._id}>
              <td>{record.name}</td>
              <td>{record.betatag}</td>
              <td>{record.double}</td>
              <td>{record.triple}</td>
              <td>{moment(record.from).format("DD/MM/YYYY")}</td>
              <td>{moment(record.to).format("DD/MM/YYYY")}</td>
              <td>{record.double*500+record.triple*500}</td>
              <td>
                <Checkbox isChecked={record.paid}/>
              </td>
              <td>
                <Checkbox isChecked={record.returned}/>
              </td>
              <td>
                <button>
                  <img src={removeIcon} alt="remove icon" className="hover:bg-fadedAccent" />
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  );
}
