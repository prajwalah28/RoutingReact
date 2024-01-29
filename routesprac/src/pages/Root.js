// Root.js
import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  return (
    <>
      <div>This is root layout </div>
      <MainNavigation/>
      <main className="">
      <Outlet />
      </main>
     
    </>
  );
}
