import LoginScreen from "@/components/user/auth/LoginScreen";
import { getMetadata } from "@/utils/metadata/getMetaData";
import React from "react";
export const metadata = getMetadata("login");

const login = () => {
  return (
    <div>
      <LoginScreen/>
    </div>
  );
};

export default login;
