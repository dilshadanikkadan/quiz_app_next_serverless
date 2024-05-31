import Navbar from "@/components/user/layout/Navbar";
import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realia | Login",
  description: "Created by Farrago",
};
const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
      {children}
      </main>
    </div>
  );
};

export default AuthLayout;
