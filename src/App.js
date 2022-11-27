import "./global.css";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      {/* components
nav / logo,search, dropdown,profile
leftSidebar / icon, title
pages:
dashboard / components: dashboardCard, tasks, schedule
posts / newPost, post
deliveries - NOT APPLCIABLE
stock / table
trackers / table
manual
*/}
      <Nav></Nav>
      <h1 className="text-3xl font-bold">hola</h1>
    </div>
  );
}

export default App;
