import { useState } from "react";
import Buttonn from "../components/Buttonn";
import { Link } from "react-router";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav((prevNav) => !prevNav);
  }

  return (
    <nav className="relative z-100 max-w-310 mx-auto px-4">
    
      <div  className={`flex justify-between items-center h-18 bg-white px-4 ${
    nav
      ? "fixed top-0 left-0 right-0 z-110"
      : "relative"
  } lg:static lg:bg-transparent`}>
 
        <img className="w-32" src="./images/logo.svg" alt="Insure logo" />


        <ul className="hidden lg:flex lg:items-center">
          <li className="p-4 uppercase text-sm">
           <Link to='/howWeWork'>
           How we work
           </Link> 
           </li>
          <li className="p-4 uppercase text-sm"><Link to='/blog'>Blog</Link> </li>
          <li className="p-4 uppercase text-sm">
           <Link to='/account'>Account</Link></li>
          <li className="p-4 uppercase text-sm">
            <Buttonn to='/viewPlans' className="border-2 border-blue-950 text-gray-950 px-5 py-1.5 uppercase hover:text-white hover:bg-gray-950 transition-colors rounded" >view plans</Buttonn>
          </li>
        </ul>


        <button
          type="button"
          onClick={handleNav}
          aria-label={nav ? "Close menu" : "Open menu"}
          aria-expanded={nav}
          className="lg:hidden relative z-110 cursor-pointer"
        >
          <img
            className=""
            src={
              nav ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
            }
            alt=""
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 top-18 z-100 bg-gray-950 text-white lg:hidden transition-transform duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <ul className={`fixed inset-x-0 bottom-0 top-18 z-100 bg-gray-950 text-center text-white lg:hidden transition-transform duration-500 `}>
          <li className="p-4 text-xl">How we work</li>
          <li className="p-4 text-xl">Blog</li>
          <li className="p-4 text-xl">Account</li>
          <li className="p-4 text-xl">
            <Buttonn to='/viewPlans' className="border-2 border-white px-22 py-3 text-xl uppercase text-white">
              VIEW PLANS
            </Buttonn>
          </li>
        </ul>

        <img
          className="pointer-events-none absolute bottom-0 right-0 z-0 w-full h-60"
          src="./images/bg-pattern-mobile-nav.svg"
          alt="mobile nav pattern"
        />
      </div>
    </nav>
  );
}

export default Navbar;

