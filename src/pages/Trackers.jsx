import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import { useState, useEffect } from "react";
import ModalRental from "../components/ModalRental";
import RentalLine from "../components/RentalLine";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Trackers(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rentalArray, setRentalArray] = useState([]);

  const notify = () => toast("Record deleted");

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
      .then((data) => {
        console.log(data);
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            setRentalArray(data);
            notify();
          });
      });
  }

  function updateInDb(record) {
    const postData = JSON.stringify(record);
    fetch("https://louisiana-2c6b.restdb.io/rest/crashpad-2/" + record.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": "63925f89f43a573dae0953ee",
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            setRentalArray(data);
          });
      });
  }

  return (
    <>
      <main className="overflow-x-auto w-full 2xl:w-11/12 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
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
          <ModalRental handleCTA={handleClose} location={props.location} postToDb={postToDb} />
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
            {rentalArray
              .filter((record) => record.location === props.location)
              .map((record) => (
                <RentalLine
                  key={record._id}
                  name={record.name}
                  betatag={record.betatag}
                  double={record.double}
                  triple={record.triple}
                  from={record.from}
                  to={record.to}
                  paid={record.paid}
                  returned={record.returned}
                  removeRecord={removeRecord}
                  updateInDb={updateInDb}
                  id={record._id}
                />
              ))}
          </tbody>
        </table>
        <ToastContainer />
      </main>
    </>
  );
}
