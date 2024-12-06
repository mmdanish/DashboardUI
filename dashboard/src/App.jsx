import DashboardCards from "./components/DashboardCards";
import DashboardGraphs from "./components/DashboardGraphs";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="flex ml-[17.5rem]">
          <DashboardCards />
        </div>
      </div>
    </div>
  );
}

export default App;
