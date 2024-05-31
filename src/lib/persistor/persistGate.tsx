"use client";
import { persistor } from "@/store/persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState, ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

export const PersistGateProvider = ({ children }: any) => {
  return <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>;
};
