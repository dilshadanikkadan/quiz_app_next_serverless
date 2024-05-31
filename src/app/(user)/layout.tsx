import Navbar from "@/components/user/layout/Navbar";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "@/components/user/layout/Footer";


const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default AuthLayout;
