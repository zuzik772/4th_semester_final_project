import CTA from "./CTA";
import RequiredIcon from "./icons/RequiredIcon";
import CloseIcon from "./icons/CloseIcon";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
export default function ModalInventory(props) {
  const categoryRef = useRef();
  const itemRef = useRef();
  const amountRef = useRef();
  const unitRef = useRef();
  const linkRef = useRef();

  const [expiryDate, setExpiryDate] = useState(new Date());
  const [newItem, setNewItem] = useState({});

  function addItem() {
    setNewItem({
      category: categoryRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      unit: unitRef.current.value,
      expirydate: moment(expiryDate).toISOString(),
      location: props.location,
      link: linkRef.current.value,
    });
  }

  useEffect(() => {
    if (Object.keys(newItem).length) props.postToDb(newItem);
  }, [newItem]);

  return (
    <div className="bg-modal fixed top-0 left-0 right-0 z-50 h-screen flex place-content-center items-center">
      <div id="small-modal" tabIndex="-1" className="w-96">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium">Add item</h3>
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
                <label htmlFor="amount" className="flex pt-2">
                  Category
                  <RequiredIcon />
                </label>

                <select
                  ref={categoryRef}
                  id="unit"
                  className="w-fit border-darkerLight bg-white rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-light focus:border-accent "
                >
                  <option value="category" defaultValue disabled>
                    Choose category
                  </option>
                  <option value="Beer">Beer</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Coffee">Coffee</option>
                  <option value="Food">Food</option>
                </select>
              </div>
              <div className="flex flex-col gap-0.5 mt-4">
                <label htmlFor="item" className="flex pt-2">
                  Item
                  <RequiredIcon />
                </label>
                <input
                  ref={itemRef}
                  type="text"
                  placeholder="Write product's name here"
                  required
                  className="p-0 border-none placeholder:text-darkerLight bg-white w-full rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-white"
                />
                <span className="border-t-2 border-t-accent"></span>
              </div>
              <div className="flex flex-col gap-0.5 mt-4">
                <label htmlFor="amount" className="flex pt-2">
                  Amount
                  <RequiredIcon />
                </label>
                <div className="flex gap-2">
                  <input
                    ref={amountRef}
                    type="number"
                    required
                    className="w-20 border-darkerLight bg-white rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-light focus:border-accent"
                  />
                  <select
                    ref={unitRef}
                    id="unit"
                    className="w-fit border-darkerLight bg-white rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-light focus:border-accent "
                  >
                    <option value="pieces" defaultValue>
                      pcs
                    </option>
                    <option value="gram">g</option>
                    <option value="bags">bags</option>
                    <option value="litres">litres</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="expiration" className="flex pt-2">
                  Expiry date
                </label>
                <DatePicker
                  selected={expiryDate}
                  onChange={(date) => setExpiryDate(date)}
                />
              </div>
              <div className="flex flex-col gap-0.5 mt-6">
                <label htmlFor="item" className="flex pt-2">
                  Link to order
                  <RequiredIcon />
                </label>
                <input
                  ref={linkRef}
                  type="text"
                  placeholder="Write website's URL"
                  required
                  className="p-0 border-none placeholder:text-darkerLight bg-white w-full rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-white"
                />
                <span className="border-t-2 border-t-accent"></span>
              </div>
            </div>
            <div className="flex justify-end p-6 pt-0">
              <CTA title="Add item" handleCTA={addItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
