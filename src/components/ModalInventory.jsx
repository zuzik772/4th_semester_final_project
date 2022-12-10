import CTA from "./CTA";
import RequiredIcon from "./icons/RequiredIcon";
export default function ModalInventory() {
  return (
    <>
      <div
        id="small-modal"
        tabIndex="-1"
        // className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add item</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="small-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="item" className="flex py-2">
                  Item
                  <RequiredIcon />
                </label>
                <input
                  type="text"
                  placeholder="Product name"
                  required
                  className="p-0 border-none placeholder:text-darkerLight bg-white w-full rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-white"
                />
                <span className="border-t-2 border-t-accent"></span>
              </div>
              <div className="flex flex-col gap-0.5 mt-4">
                <label htmlFor="amount" className="flex py-2">
                  Amount
                  <RequiredIcon />
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    required
                    className="w-20 border-darkerLight bg-white rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-light focus:border-accent"
                  />
                  <select
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
                <label htmlFor="expiration" className="flex py-2">
                  Expiry date
                </label>

                <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        filrule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    datepicker="true"
                    datepicker-autohide="true"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <CTA title="Add" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
