import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function Header() {
  // eslint-disable-next-line no-unused-vars
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  // @ts-ignore
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        // headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        // headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="fixed  w-full z-50 transition-all duration-200"
    >
      <div className="container flex justify-between items-center sm:gap-0 flex-col sm:flex-row">
        <Link to="/">
          <img
            src="/assets/images/images.png"
            alt="logo-img"
            className="w-[300px] h-[150px] object-contain"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-[50px] ">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`${link} opacity-[0.9] hover:opacity-[1] text-white font-normal hover:underline duration-200 transition-all`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
