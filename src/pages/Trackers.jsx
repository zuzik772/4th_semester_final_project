import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import removeIcon from "../img/trash.png";
import { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import ModalRental from "../components/ModalRental";
import moment from "moment/moment";

export default function Trackers(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rentalArray, setRentalArray] = useState([]);

  const url =
    "https://louisiana-2c6b.restdb.io/rest/crashpad-2?sort=from&dir=-1";
  const options = {
    headers: {
      "x-apikey": "63925f89f43a573dae0953ee",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setRentalArray(data);
      });
    // eslint-disable-next-line
  }, []);

  function postToDb(record) {
    const postData = JSON.stringify(record);
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
            setRentalArray(data);
          });
      });
  }

  function removeRecord(id) {
    fetch("https://louisiana-2c6b.restdb.io/rest/crashpad-2/" + id, {
      method: "delete",
      headers: {
        "x-apikey": "63925f89f43a573dae0953ee",
      },
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            setRentalArray(data);
          });
      });
  }

  return (
    <>
      <main className="overflow-x-auto w-full 2xl:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <MainTitle title="Crashpad rental" />
            <p className="text-md opacity-75 mb-4">
              The records are sorted from newest to oldest and the deposit is calculated
              automatically, so don’t worry about it.
            </p>
          </div>
          <CTA title="Add rental " handleCTA={handleShow} />
        </div>
        {show ? (
          <ModalRental
            handleCTA={handleClose}
            location={props.location}
            postToDb={postToDb}
          />
        ) : null}

        <table className="w-fit">
          <thead>
            <tr>
              <th>Name</th>
              <th>Beta tag</th>
              <th className="text-center">Double</th>
              <th className="text-center">Triple</th>
              <th className="pl-4">From</th>
              <th>To</th>
              <th className="text-center">Deposit</th>
              <th className="text-center">Deposit paid</th>
              <th className="text-center">Deposit returned</th>
            </tr>
          </thead>
          <tbody>
            {rentalArray.filter((record) => record.location === props.location).map((record) => (
              <tr key={record._id}>
                <td>{record.name}</td>
                <td>{record.betatag}</td>
                <td className="text-center">{record.double}</td>
                <td className="text-center">{record.triple}</td>
                <td className="pl-4">{moment(record.from).format("DD/MM/YYYY")}</td>
                <td>{moment(record.to).format("DD/MM/YYYY")}</td>
                <td className="text-center">{record.double * 500 + record.triple * 500}</td>
                <td className="text-center">
                  <Checkbox isChecked={record.paid} />
                </td>
                <td className="text-center">
                  <Checkbox isChecked={record.returned}/>
                </td>
                <td>
                  <button onClick={()=>removeRecord(record._id)}>
                    <img src={removeIcon} alt="remove icon" className="hover:bg-fadedAccent" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
