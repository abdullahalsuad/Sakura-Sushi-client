import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import AllSushiDataProvider from "./context/AllSushiProvider";
import AuthProvider from "./context/AuthProvider";

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
            <AuthProvider>
              <AllSushiDataProvider>
                <Outlet />
              </AllSushiDataProvider>
            </AuthProvider>
          </div>
        </div>

        {/* Footer */}

        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
