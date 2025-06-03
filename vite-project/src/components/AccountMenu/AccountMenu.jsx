import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../redux/slices/authSlice";

import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { hasRole } from "../../Services/UserAuthFirebase";
import { toast } from "react-toastify";

const AccountMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  
  const isAdmin = user && hasRole(user,"admin");

  const handleLogOut = (data) => {
    dispatch(fetchLogout(data))
      .unwrap()
      .then(() => {
        toast.success("Logout successful");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div>
      <div className="p-2 ">
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
          onClick={() => navigate("/account")}
        >
          <div className="flex items-center gap-2">
            <AiOutlineUser size={22} /> <span> Manage My Account</span>
          </div>
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center gap-2">
            <FiShoppingBag size={22} /> <span>My Order</span>{" "}
          </div>
        </a>
        {isAdmin && (
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
            onClick={() => navigate("/adminpanel")}
          >
            <div className="flex items-center gap-2">
              <MdOutlineAdminPanelSettings size={22} /> <span>Admin Panel</span>{" "}
            </div>
          </a>
        )}

        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          <div className="flex items-center gap-2">
            <MdOutlineCancel size={22} /> <span>My Cancellations</span>{" "}
          </div>
        </a>

        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          <div className="flex items-center gap-2">
            <CiStar size={22} /> <span>My Reviews</span>{" "}
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
          onClick={() => {
            handleLogOut();
            navigate("/");
          }}
        >
          <div className="flex items-center gap-2">
            <BiLogOut size={22} /> <span> Logout</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AccountMenu;