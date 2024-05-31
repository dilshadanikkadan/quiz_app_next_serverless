"use client";
import { setAuth } from "@/store/slices/user";
import { useRouter } from "next/navigation";
import { off } from "process";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated, isAdmin } = useSelector((state: any) => state.user);

  const router = useRouter();
  useEffect(() => {
    console.log("its true dilshad", isAdmin);
    if (isAdmin) {
      router.push("/admin");
    } else if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated,isAdmin]);

  return children;
};
