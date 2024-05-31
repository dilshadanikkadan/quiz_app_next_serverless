import React from "react";
import LoginImage from "./LoginImage";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  return (
    <div className="w-full flex h-[80vh]">
      <div className="left   flex-[1]">
        <div className="mt-[10%]">
          <LoginImage />
        </div>
      </div>
      <div className="right flex-[1] flex flex-col  justify-center">
        <div className="ml-[8%] flex  flex-col ">
          <h3 className="font-bold ml-[14%] text-yellow text-2xl font-primary mb-6">
            Login
          </h3>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
