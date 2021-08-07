import styles from "./Navbar.module.scss";
import { useState, useRef, useEffect } from "react";
import { SignUpButton } from "./components-styled";
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
          {/* <NavBarButton href="/">About</NavBarButton>
          <NavBarButton href="/">Timeline</NavBarButton>
          <NavBarButton href="/">Resources</NavBarButton>
          <NavBarButton href="/">Prizes</NavBarButton>
          <NavBarButton href="/">Highlights</NavBarButton>
          <NavBarButton href="/">Schedule</NavBarButton>
          <NavBarButton href="/">Streams</NavBarButton>
          <NavBarButton href="/">FAQs</NavBarButton>
          <NavBarButton><HackDropDown>Hack</HackDropDown></NavBarButton> */}
          <Link to="/Sponsors" className={styles.navbarButton}>Sponsors</Link>
          {/* <NavBarButton href="/Sponsors">Sponsors</NavBarButton> */}
          <SignUpButton to="/Registration">
            {" "}
            <span>REGISTER</span>
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
