import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
import AmountInput from "../components/AmountInput";
import removeIcon from "../img/trash.png";
import RadioButton from "../components/RadioButton";
import { useState, useEffect } from "react";
import ModalInventory from "../components/ModalInventory";
import moment from "moment/moment";
export default function Inventory(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inventoryArray, setInventoryArray] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortedBy, setSortedBy] = useState("");
  const [url, setUrl] = useState(
    "https://louisiana-2c6b.restdb.io/rest/inventory-3"
  );

  const options = {
    headers: {
      "x-apikey": "63925f89f43a573dae0953ee",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setInventoryArray(data);
        setFiltered(data);
      });
    // eslint-disable-next-line
  }, [url]);

  function postToDb(item) {
    const postData = JSON.stringify(item);
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
            setInventoryArray(data);
            setFiltered(data);
          });
      });
  }

  function filterByCategory(category) {
    if (category === "all") setFiltered(inventoryArray);
    else
      setFiltered(inventoryArray.filter((item) => item.category === category));
  }

  function sort(property) {
    if (property !== "") {
      setSortedBy(property);
      if (property === "expirydate")
        setUrl(
          "https://louisiana-2c6b.restdb.io/rest/inventory-3?sort=expirydate"
        );
      else {
        setUrl("https://louisiana-2c6b.restdb.io/rest/inventory-3");
        const sortedArray = [...filtered];
        setFiltered(sortByProperty(sortedArray, property));
      }
    }
  }

  function sortByProperty(array, propertyName) {
    return array.sort(function (a, b) {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  function removeItem(id) {
    fetch("https://louisiana-2c6b.restdb.io/rest/inventory-3/" + id, {
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
          setInventoryArray(data);
          setFiltered(data);
        });
      });
  }

  return (
    <main className="overflow-x-auto w-full 2xl:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap sm:flex-nowrap justify-between">
        <div>
          <MainTitle title="Inventory overview" />
          <p className="text-md opacity-75 mb-4">
            Check what items are we missing, you can filter by category
          </p>
        </div>
        {props.userType === "admin" && (
          <CTA title="Add item" handleCTA={handleShow} />
        )}
      </div>
      {show ? (
        <ModalInventory
          handleCTA={handleClose}
          location={props.location}
          postToDb={postToDb}
        />
      ) : null}
      <div className="flex flex-wrap gap-2 lg:gap-4 my-4 lg:my-0 text-center">
        <RadioButton
          title="All"
          name={"inv"}
          value={"all"}
          radioButtonFunction={filterByCategory}
        />
        <RadioButton
          title="Beer"
          name={"inv"}
          value={"Beer"}
          radioButtonFunction={filterByCategory}
        />
        <RadioButton
          title="Cleaning"
          name={"inv"}
          value={"Cleaning"}
          radioButtonFunction={filterByCategory}
        />
        <RadioButton
          title="Coffee"
          name={"inv"}
          value={"Coffee"}
          radioButtonFunction={filterByCategory}
        />
        <RadioButton
          title="Food"
          name={"inv"}
          value={"Food"}
          radioButtonFunction={filterByCategory}
        />
        <RadioButton
          title="Soft drinks"
          name={"inv"}
          value={"Soft Drinks"}
          radioButtonFunction={filterByCategory}
        />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th
              onClick={() => sort("category")}
              className={`${sortedBy === "category" ? "text-accent" : ""}`}
            >
              Category
            </th>
            <th
              onClick={() => sort("item")}
              className={`${sortedBy === "item" ? "text-accent" : ""}`}
            >
              Item
            </th>
            <th
              onClick={() => sort("amount")}
              className={`${sortedBy === "amount" ? "text-accent" : ""}`}
            >
              Amount
            </th>
            <th
              onClick={() => sort("expirydate")}
              className={`${sortedBy === "expirydate" ? "text-accent" : ""}`}
            >
              Expiry date
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered
            .filter((item) => item.location === props.location)
            .map((item) => (
              <tr key={item._id}>
                <td>{item.category}</td>
                <td>{item.item}</td>
                <td>
                  <AmountInput amount={item.amount} /> {item.unit}
                </td>
                <td>
                  {item.expirydate
                    ? moment(item.expirydate).format("DD/MM/YYYY")
                    : "-"}
                </td>
                {props.userType === "admin" && (
                  <td className="text-end">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-accent text-white py-1 px-6 rounded-xl hover:bg-fadedAccent hover:text-dark"
                    >
                      Order
                    </a>
                  </td>
                )}
                {props.userType === "admin" && (
                  <td className="text-end">
                    <button
                    onClick={()=>removeItem(item._id)}
                    >
                      <img
                        src={removeIcon}
                        alt="remove icon"
                        className="hover:bg-fadedAccent"
                      />
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
