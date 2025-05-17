import React, { use } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaBars, FaRegClipboard } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";
import { LuBox } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const SideBar = () => {
  const navigate = useNavigate();
  const { signOutUser, setUser } = use(AuthContext);

  let handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/");
      toast.success("Logout successful.");
    } catch (error) {
      console.log(error);
    }

    setUser(null);
  };
  return (
    <div className="bg-white shadow-md inset-y-0 left-0 h-[600px] border border-gray-200 rounded-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-teal-700 text-center">
          Admin Portal
        </h2>
      </div>
      <nav className="mt-6 px-4 space-y-1">
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 px-4 py-3 text-gray-700 bg-teal-100 rounded-md"
              : "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          }
        >
          <AiOutlineProduct />
          Dashboard
        </NavLink>

        {/* Manage Sushi */}
        <NavLink
          to="/dashboard/sushi/add"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 px-4 py-3 text-gray-700 bg-teal-100 rounded-md"
              : "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          }
        >
          <LuBox />
          Manage Sushi
        </NavLink>

        {/* Orders */}
        <NavLink
          to="/dashboard/order"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 px-4 py-3 text-gray-700 bg-teal-100 rounded-md"
              : "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          }
        >
          <FaRegClipboard />
          Orders
        </NavLink>

        {/* Users */}
        <NavLink
          to="/dashboard/all-users"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 px-4 py-3 text-gray-700 bg-teal-100 rounded-md"
              : "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          }
        >
          <TbUsersGroup size={20} />
          Users
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 px-4 py-3 text-gray-700 bg-teal-100 rounded-md"
              : "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          }
        >
          <GrUserSettings />
          Profile
        </NavLink>

        {/* Logout */}
        <Link
          onClick={handleSignOut}
          className="flex items-center gap-2 w-full py-2 px-3 rounded-md text-red-600 hover:bg-red-50 transition"
        >
          <FiLogOut />
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
