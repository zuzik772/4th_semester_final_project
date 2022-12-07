import schedule from "../img/schedule.png";
export default function Schedule() {
  return (
    <div>
      {/* <div className="grid">
        <span>John Smith</span>
        <span>Jane Doe</span>
        <span>Zuzana Chudinova</span>
      </div> */}
      {/* <table className="grid grid-cols-18">
        <tr className="flex gap-2">
          <div className="w-40"></div>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
          <th>12</th>
          <th>13</th>
          <th>14</th>
          <th>15</th>
          <th>16</th>
          <th>17</th>
          <th>18</th>
          <th>19</th>
          <th>20</th>
          <th>21</th>
          <th>22</th>
          <th>23</th>
        </tr>
        <tr className="flex flex-col w-40">
          <td>John Smith</td>
          <td>Jane Doe</td>
          <td>Zuzana Chudinova</td>
        </tr>
      </table> */}
      <img src={schedule} alt="schedule" className="w-auto" />
    </div>
  );
}
