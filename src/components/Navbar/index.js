import styles from "./Navbar.module.scss";
import {SignUpButton} from "./components-styled";
import {Link} from "react-router-dom";
import {Hidden} from "@material-ui/core";

// React Ref magic to detect raw events to trigger a function
/*
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
*/

const Navbar = () => {
  // this is for the menu on mobile
 // const [open, setOpen] = useState(false);

  // when the user clicks/taps outside the open Menu, it closes.
 // const ref = useRef(null);
 // useOnClickOutside(ref, () => setOpen(false));

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <div className={styles.logoText}>
          <Hidden xsDown>          <h2>Melbourne Hack</h2>
              <h3>by HackMelbourne</h3></Hidden>
        </div>
      </Link>
      <div className={styles.links}>
        <div className={styles.desktopNav}>
          <Link to="/Sponsors" className={styles.navbarButton}>Sponsors</Link>
          {/* <NavBarButton href="/Sponsors">Sponsors</NavBarButton> */}
          <SignUpButton to="/Registration">
            {" "}
            <span>REGISTER</span>
          </SignUpButton>
        </div>
        {/* <div className={styles.mobileNav} ref={ref}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
