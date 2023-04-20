import SearchIcon from "@mui/icons-material/Search";
import { useMemo, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";

import RefugeeOneLogo from "@/assets/refugeeone-logo-transparent.png";

const buttonMap = {
  buttons: {},
  navs: {
    About: {
      icon: <SearchIcon />,
      path: "/about",
    },
  },
};

function NavbarList(props) {
  const navigate = useNavigate();
  const items = useMemo(() => {
    return (
      <>
        <div className="w-full p-2 gap-4 flex flex-col">
          {Object.keys(buttonMap.buttons).map((key) => (
            <div
              key={key}
              className="border-2 border-primary rounded-2xl text-primary flex flex-row w-full h-12 justify-start content-center p-2 hover:bg-primary hover:text-primary-content cursor-pointer"
              onClick={() => {
                navigate(buttonMap.buttons[key].path);
                props.setOpen(false);
              }}
            >
              <div className="h-full flex flex-col justify-center px-2 text-2xl">
                {buttonMap.buttons[key].icon}
              </div>
              <div className="h-full flex flex-col justify-center font-semibold">
                {key}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full p-2 gap-4 flex flex-col">
          {Object.keys(buttonMap.navs).map((key) => (
            <div
              key={key}
              className="border-b-2 border-grey flex flex-row w-full h-12 justify-start content-center p-2 hover:bg-primary hover:text-primary-content cursor-pointer"
              onClick={() => {
                navigate(buttonMap.navs[key].path);
                props.setOpen(false);
              }}
            >
              <div className="h-full flex flex-col justify-center px-2 text-2xl">
                {buttonMap.navs[key].icon}
              </div>
              <div className="h-full flex flex-col justify-center font-semibold">
                {key}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }, [props]);
  return <div className="w-full p-2 flex flex-col gap-8">{items}</div>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden max-md:block h-16">
        <div className="fixed top-0 left-0 z-50 w-full border-b-2 border-base-300 h-16 bg-base-100 flex flex-row justify-end">
          <div></div>
          <img
            src={RefugeeOneLogo}
            className="pt-1 m-3 h-auto max-width-full width-auto object-cover"
            alt="RefugeeOne Logo"
          />
        </div>
        <Menu
          isOpen={open}
          onStateChange={(state) => setOpen(state.isOpen)}
          crossButtonClassName={"mr-4"}
          crossClassName={"bg-base-content"}
          overlayClassName={"opacity-25"}
          menuClassName={
            "fixed top-0 left-0 bg-base-100 px-4 pt-16 text-lg font-semibold w-72"
          }
          burgerBarClassName={"bg-base-content"}
          burgerButtonClassName={"fixed top-6 left-6 z-50 w-6 h-4"}
          className={"fixed top-0 left-0 w-full h-full"}
        >
          <NavbarList setOpen={setOpen} />
        </Menu>
      </div>

      <div className="w-60 h-screen max-md:hidden"></div>

      <div className="fixed top-0 left-0 w-60 h-screen border-r-1 border-base-300 bg-base-200 max-md:hidden">
        <img src={RefugeeOneLogo} className="p-8" alt="RefugeeOne Logo" />
        <NavbarList setOpen={setOpen} />
      </div>
    </>
  );
}
