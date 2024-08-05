import { Link, Route, Routes } from "react-router-dom";
import MemberPage from "../pages/memberPage";
import CheckBookPage from "../pages/checkBookPage";
import PassBookPage from "../pages/passBookPage";
import LoanPage from "../pages/loanPage";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex ">
        <div className="w-64 bg-gray-800 text-white flex flex-col h-screen">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <Link to="/">
              <span className="text-xl font-bold">Logo</span>
            </Link>
          </div>
          <nav className="flex-1 px-4 py-8 space-y-2">
            <Link to="/admin/loan">
              <p className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Loan Request
              </p>
            </Link>
            <Link to="/admin/passbook">
              <p className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Passbok Requests
              </p>
            </Link>
            <Link to="/admin/checkbook">
              <p className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Checkbook Requests
              </p>
            </Link>
            <Link to="/admin/members">
              <p className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Members
              </p>
            </Link>
          </nav>
        </div>
        <div className=" w-full">
          <div className="h-16 bg-gray-900 w-full text-white flex justify-center items-center">
            <span className="font-bold">Admin pannel</span>
          </div>
          <div className=" w-full">
            <Routes>
              <Route path="/members" element={<MemberPage />} />
              <Route path="/checkbook" element={<CheckBookPage />} />
              <Route path="/passbook" element={<PassBookPage />} />
              <Route path="/loan" element={<LoanPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
