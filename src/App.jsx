import "./App.css";

import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";

export default function App() {
  /**
   * what's happening here:
   * if you access a page that requires auth information,
   * you need to let the website fetch the auth information before loading the page.
   * Otherwise, there will be an error
   */
  return (
    <>
      <div className="flex md:flex-row max-md:flex-col h-screen overflow-auto">
        {/* <div className="flex-none">
          <Navbar />
        </div> */}

        {/* add max-h for mobile to avoid the nav-bar scrolling away problem */}
        <div className="flex-auto flex flex-col max-md:max-h-[calc(100vh_-_8em)]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
