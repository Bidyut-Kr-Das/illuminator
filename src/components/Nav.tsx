import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './HamBurger';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 z-50 flex h-12 w-screen items-center justify-between bg-primary px-4 text-primary shadow-lg lg:px-12">
      <div className="relative flex w-full items-center justify-between">
        <button className="lg:hidden">
          <Hamburger
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </button>
        <div
          className={`absolute ${showMenu ? `-left-4` : `-left-80`} lg:backdrop-none lg:backdrop-none top-0 mt-9 flex h-[calc(100vh-3rem)] w-48 flex-col gap-8 p-4  shadow-md backdrop-blur-md duration-200 lg:static lg:left-0 lg:mt-0 lg:flex lg:h-0 lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:bg-transparent  lg:p-0 lg:text-inherit lg:shadow-none lg:duration-0`}
        >
          <Link className="duration-100 hover:scale-110" to="/topPicks">
            Top Picks
          </Link>
          <Link className="duration-100 hover:scale-110" to="/trending">
            Trending
          </Link>
        </div>
        <Link
          to="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        >
          <img src="/Illuminator.svg" alt="Illuminator Logo" className="h-16" />
        </Link>
        <div className="flex items-center gap-8">
          <Link
            className="duration-100 hover:scale-110"
            to="/profile"
            title="Profile"
          >
            <img
              src="/icons/userIcon.svg"
              alt="usericon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            className="duration-100 hover:scale-110"
            to="/cart"
            title="Cart"
          >
            <img
              src="/icons/cartIcon.svg"
              alt="cartIcon"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
