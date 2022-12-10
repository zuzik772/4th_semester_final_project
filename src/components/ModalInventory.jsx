import CTA from "./CTA";
import RequiredIcon from "./icons/RequiredIcon";
import CloseIcon from "./icons/CloseIcon";
export default function ModalInventory(props) {
  return (
    <div className="bg-dark fixed top-0 left-0 right-0 z-50 h-screen flex place-content-center items-center">
      <div
        id="small-modal"
        tabIndex="-1"
        // className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        className="w-96"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium">Add item</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="small-modal"
                onClick={props.handleModal}
              >
                <CloseIcon />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-5">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="item" className="flex pt-2">
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
                <label htmlFor="amount" className="flex pt-2">
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
                <label htmlFor="expiration" className="flex pt-2">
                  Expiry date
                </label>
              </div>
              <div className="flex flex-col gap-0.5 mt-6">
                <label htmlFor="item" className="flex pt-2">
                  Link to order
                  <RequiredIcon />
                </label>
                <input
                  type="text"
                  placeholder="Website's URL"
                  required
                  className="p-0 border-none placeholder:text-darkerLight bg-white w-full rounded-md  focus:ring-0 dark:focus:ring-0 focus:bg-white"
                />
                <span className="border-t-2 border-t-accent"></span>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex justify-end p-6 pt-0">
              <CTA title="Add item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
