import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    navRef.current.classList.toggle("top-[9%]");
  };

  return (
    <div>
      <header className="bg-white">
        <div className={`nav-links ${isMenuOpen ? 'top-[9%]' : ''}`} ref={navRef}>
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
            </div>
            <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <a className="hover:text-gray-500" href="#">Products</a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">Solution</a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">Resource</a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">Developers</a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={toggleMenu} className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
