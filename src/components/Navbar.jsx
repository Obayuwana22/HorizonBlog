import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Search from "./Search";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleMenu]);

  const navLinks = [
    { id: nanoid(), href: "/", text: "home" },
    { id: nanoid(), href: "/posts", text: "posts" },
    { id: nanoid(), href: "/createpost", text: "create post" },
    { id: nanoid(), href: "/profile", text: "profile" },
  ];
  return (
    <div>
      <header className="fixed w-full h-20 top-0 left-0 bg-white shadow">
        <div className="flex items-center justify-between relative mx-2 mt-5 lg:mx-10 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="text-3xl font-bold text-gray-900">HorizonBlog</div>
          <nav
            className={`absolute top-10 px-2 py-5 w-52 bg-black transform transition-all duration-500 ease-in-out md:hidden ${
              toggleMenu
                ? "opacity-100 translate-y-3"
                : "opacity-0 -translate-y-10 pointer-events-none"
            }`}
          >
            <Search />
            <ul>
              {navLinks.map((navLink) => {
                const { id, href, text } = navLink;
                return (
                  <li
                    key={id}
                    className="capitalize font-semibold  text-white my-2"
                  >
                    <NavLink to={href}>{text}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
            <RiMenu3Fill />
          </div>

          <nav className="hidden md:block">
            <ul className="md:flex md:flex-row md:gap-4">
              {navLinks.map((navLink) => {
                const { id, href, text } = navLink;
                return (
                  <li
                    key={id}
                    className="capitalize font-semibold text-gray-700 hover:text-black my-2"
                  >
                    <NavLink to={href}>{text}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden md:block">
            <Search />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
