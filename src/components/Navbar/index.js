import styles from "./Navbar.module.scss";
import { useState, useRef, useEffect } from "react";
import { NavBarButton, SignUpButton } from "./components-styled";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import Menu from "./Menu";
import navbar_logo from "../assets/logo.png";

// React Ref magic to detect raw events to trigger a function
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Navbar = () => {
  // this is for the menu on mobile
  const [open, setOpen] = useState(false);

  // when the user clicks/taps outside the open Menu, it closes.
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img alt="HackMelb Logo Bulb!" src={navbar_logo} />
        <div className={styles.logoText}>
          <h2>Melbourne Hack</h2>
          <h3>by HackMelbourne</h3>
        </div>
      </Link>
      <div className={styles.links}>
        <div className={styles.desktopNav}>
          {/* <NavBarButton href="/#about">About</NavBarButton> */}
          <NavBarButton href="/#timeline">Timeline</NavBarButton>
          <NavBarButton href="/#resources">Resources</NavBarButton>
          <NavBarButton href="/#prizes">Prizes</NavBarButton>
          <NavBarButton href="/#highlights">Highlights</NavBarButton>
          <NavBarButton href="/#schedule">Schedule</NavBarButton>
          <NavBarButton href="/#streams">Streams</NavBarButton>
          <NavBarButton href="/#faqs">FAQs</NavBarButton>
          {/* <NavBarButton><HackDropDown>Hack</HackDropDown></NavBarButton> */}
          {/* <NavBarButton href="/#sponsors">Sponsors</NavBarButton> */}
          <SignUpButton variant="outlined">
            {" "}
            <a
              href="https://www.eventbrite.com.au/e/melbourne-hack-2021-tickets-162202392723"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER
            </a>
          </SignUpButton>
        </div>
        <div className={styles.mobileNav} ref={ref}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
