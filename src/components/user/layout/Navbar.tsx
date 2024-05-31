"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/slices/user";
const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isAdmin } = useSelector((state: any) => state.user);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="h-[80px] w-[100%] flex font-primary  items-center  justify-center   mx-auto shadow-sm ">
      <div className="left flex-[2] font-semibold text-xl ml-10">
        <Link href="/" className="text-yellow">
          Quiz <span className="font-semibold text-gray-500">master</span>
        </Link>
      </div>
      <div className="cenetr flex-[8] flex gap-10 text-gray-500   items-center justify-center font-semibold ">
        {isAdmin ? (
          <Link href="/admin/addquiz">AddQuiz</Link>
        ) : (
          <Link href="/">Home</Link>
        )}
        {!isAdmin && (
          <Link className="" href="/quizes">
            Quizes
          </Link>
        )}
        {isAdmin && (
          <Link className="" href="/admin">
            DashBoard
          </Link>
        )}

        {isAuthenticated && !isAdmin && <Link href="/profile">Profile</Link>}
      </div>
      <div className="right flex items-center text-gray-500   gap-4  justify-center flex-[4] font-semibold">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-[#FDB101] py-2 px-4 text-white rounded-lg"
          >
            Log Out
          </button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
