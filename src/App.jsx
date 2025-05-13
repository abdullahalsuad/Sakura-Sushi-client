import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col from-blue-50 to-purple-100">
        {/* Navbar and main content */}
        <div className="flex-grow">
          <div>
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="mb-20">
            <Outlet />
          </div>
        </div>

        {/* Footer */}

        <Footer />
      </div>
    </>
  );
}

export default App;
