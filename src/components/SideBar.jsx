import Logo from "../assets/Logo.svg";
import Menu from "../assets/menu.svg";
import StoreFront from "../assets/storeFront.svg";
import bagHandle from "../assets/bagHandle.svg";
import logOut from "../assets/logOut.svg";
import { Link } from "react-router-dom";




function Sidebar() {
  return (
    <aside className="sidebar fixed inset-y-0 left-0 flex h-screen w-14 shrink-0 flex-col rounded-lg bg-white px-0 py-6">
      <Link to="/" aria-label="Home" className="mb-8 self-center">
        <img src={Logo} alt="" className="h-5 w-5 shrink-0" />
      </Link>
      <nav aria-label="Main navigation" className="flex w-full flex-1 flex-col">
        <ul className="flex w-full flex-1 flex-col items-center gap-6 text-[#9E9E9E]">
          <li className="w-full">
            <Link
              to="/"
              aria-label="Menu"
              title="Menu"
              className="flex w-full justify-center rounded p-1 text-[#6154F0] focus-visible:outline-2"
            >
              <img src={Menu} alt="" className="h-5 w-5 shrink-0" />
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/Products"
              aria-label="Store front"
              title="Store front"
              className="flex w-full justify-center rounded p-1 text-[#6154F0] focus-visible:outline-2"
            >
              <img src={StoreFront} alt="" className="h-5 w-5 shrink-0" />
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/cart"
              aria-label="Bag"
              title="Bag"
              className="flex w-full justify-center rounded p-1 focus-visible:outline-2"
            >
              <img src={bagHandle} alt="" className="h-5 w-5 shrink-0" />
            </Link>
          </li>
          <li className="mt-auto w-full">
            <button
              type="button"
              aria-label="Log out"
              title="Log out"
              className="flex w-full justify-center rounded p-1 focus-visible:outline-2"
            >
              <img
                src={logOut}
                alt=""
                className="h-5 w-5 shrink-0"
              />
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
