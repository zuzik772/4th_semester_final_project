import CTA from "./CTA";
import RequiredIcon from "./icons/RequiredIcon";
import CloseIcon from "./icons/CloseIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import { useEffect } from "react";
export default function ModalDelivery(props) {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [newDelivery, setNewDelivery] = useState({});

  const productRef = useRef();

  function addDelivery() { 
    setNewDelivery({
      allDay: false,
      start: fromDate.toISOString(),
      end: toDate.toISOString(),
      title: productRef.current.value,
      location: props.location
    });
  }

  useEffect(() => {
    if (Object.keys(newDelivery).length) props.addToSchedule(newDelivery);
    // eslint-disable-next-line
  }, [newDelivery]);

  return (
    <div className="bg-modal fixed top-0 left-0 right-0 z-50 h-screen flex place-content-center items-center">
      <div id="small-modal" tabIndex="-1" className="w-96">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium">Add delivery</h3>
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
                <label htmlFor="product" className="flex pt-2">
                  Delivery of
                  <RequiredIcon />
                </label>
                <input
                  ref={productRef}
                  type="text"
                  placeholder="Write product name here"
                  required
                  className="pl-0 pb-0 rounded-none border-0 border-b-darkerLight border-b focus:ring-0 dark:focus:ring-0 focus:border-accent"
                />
              </div>
              <div className="flex flex-col gap-0.5 mt-4">
                <label htmlFor="company" className="flex pt-2">
                  Delivered by
                  <RequiredIcon />
                </label>
                <input
                  type="text"
                  placeholder="Write company name here"
                  required
                  className="pl-0 pb-0 rounded-none border-0 border-b-darkerLight border-b focus:ring-0 dark:focus:ring-0 focus:border-accent"
                />
              </div>
              <div className="flex flex-col gap-1 mt-4">
                <label htmlFor="when" className="flex mt-6">
                  When
                  <RequiredIcon />
                </label>
                <label htmlFor="from" className="flex mt-1">
                  From
                </label>
                <DatePicker
                  showTimeSelect
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  className="w-full rounded-md border-darkerLight focus:bg-light focus:ring-0 focus:border-accent"
                />
                <label htmlFor="to" className="flex mt-1">
                  To
                </label>
                <DatePicker
                  showTimeSelect
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  className="w-full rounded-md border-darkerLight focus:bg-light focus:ring-0 focus:border-accent"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="description" className="flex py-2 ">
                  Description
                </label>
                <textarea
                  name="post"
                  id="post"
                  cols="38"
                  rows="3"
                  className="rounded-lg outline-none p-2 border-darkerLight hover:border-accent focus:border-accent focus:ring-0 dark:focus:ring-0"
                  placeholder="Write description here"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end p-6 pt-0">
              <CTA title="Add delivery" handleCTA={addDelivery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
