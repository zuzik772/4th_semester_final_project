import CTA from "./CTA";
import RequiredIcon from "./icons/RequiredIcon";
import CloseIcon from "./icons/CloseIcon";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
export default function ModalRental(props) {
  const [newRecord, setNewRecord] = useState({});
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const nameRef = useRef();
  const betatagRef = useRef();
  const doubleRef = useRef();
  const tripleRef = useRef();

  function addRecord() {
    setNewRecord({
      name: nameRef.current.value,
      betatag: betatagRef.current.value,
      double: doubleRef.current.value,
      triple: tripleRef.current.value,
      from: moment(fromDate).toISOString(),
      to: moment(toDate).toISOString(),
      location: props.location,
      paid: false,
      returned: false,
    });
  }

  useEffect(() => {
    if (Object.keys(newRecord).length) props.postToDb(newRecord);
  }, [newRecord, props]);

  return (
    <div className="bg-modal fixed top-0 left-0 right-0 z-50 h-screen flex place-content-center items-center">
      <div id="small-modal" tabIndex="-1" className="w-96">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium">Add rental</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="small-modal"
                onClick={props.handleCTA}
              >
                <CloseIcon />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-5">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="name" className="flex pt-2">
                  Name
                  <RequiredIcon />
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Write customer's name here"
                  required
                  className="pl-0 pb-0 rounded-none border-0 border-b-darkerLight border-b focus:ring-0 dark:focus:ring-0 focus:border-accent"
                />
              </div>
              <div className="flex flex-col gap-0.5 mt-4">
                <label htmlFor="betaTag" className="flex pt-2">
                  Beta tag
                  <RequiredIcon />
                </label>
                <input
                  ref={betatagRef}
                  type="text"
                  placeholder="Scan beta tag here"
                  required
                  className="pl-0 pb-0 rounded-none border-0 border-b-darkerLight border-b focus:ring-0 dark:focus:ring-0 focus:border-accent"
                />
              </div>
              <div className="flex flex-col gap-1 mt-4">
                <label htmlFor="items" className="flex mt-6">
                  Items
                  <RequiredIcon />
                </label>
                <div className="flex gap-2">
                  <input
                    ref={doubleRef}
                    type="number"
                    required
                    className="w-20 border-darkerLight bg-white rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-light focus:border-accent"
                  />
                  <label htmlFor="doubleCrashpad" className="flex py-2 font-normal">
                    Double crashpad
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    ref={tripleRef}
                    type="number"
                    required
                    className="w-20 border-darkerLight bg-white rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-light focus:border-accent"
                  />
                  <label htmlFor="tripleCrashpad" className="flex py-2 font-normal">
                    Triple crashpad
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="expiration" className="flex py-2 ">
                  Rental period
                </label>
                <div className="flex gap-1">
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    className="w-full rounded-md border-darkerLight focus:bg-light focus:ring-0 focus:border-accent"
                  />
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    className="w-full rounded-md border-darkerLight focus:bg-light focus:ring-0 focus:border-accent"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end p-6 pt-0">
              <CTA title="Add rental" handleCTA={addRecord} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
