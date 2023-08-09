import MainNav from "./main-nav";
import NavButton from "./navbutton";
import { ModeToggle } from "./togle-button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav
      className="flex-no-wrap flex z-30 w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-slate-900 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 fixed"
      data-te-navbar-ref
    >
      <div className="flex w-full justify-between px-3">
        <NavButton />

        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto transform transition-opacity duration-300 ease-in-out"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row items-center"
            data-te-navbar-nav-ref
          >
            <MainNav />
          </ul>
        </div>

        <div className="relative flex">
          <div className="relative" data-te-dropdown-ref>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
