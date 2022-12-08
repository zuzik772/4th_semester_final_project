import MainTitle from "../components/MainTitle";
import CTA from "../components/CTA";
export default function Inventory() {
  return (
    <main className="w-full lg:w-3/5 h-fit p-2 sm:p-6 sm:pl-12 block lg:grid gap-6">
      <div className="flex flex-wrap sm:flex-nowrap justify-between">
        <MainTitle title="Inventory overview" />
        <CTA title="Add item" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
      <table>
        <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Expiry date</th>
        </tr>
        <tr>
          <td>Bananas</td>
          <td>14pcs</td>
          <td>10/12/2022</td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>9pcs</td>
          <td>15/12/2022</td>
        </tr>
      </table>
    </main>
  );
}
