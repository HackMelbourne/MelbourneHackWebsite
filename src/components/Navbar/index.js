import styles from "./Navbar.module.scss";
import { NavBarButton, SignUpButton } from "./components-styled";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className = {styles.logo}>
          <h2>Melbourne Hack</h2>
          <h3>by HackMelbourne</h3>
        </div>
      </Link>
      <div className={styles.links}>
          <NavBarButton>Updates</NavBarButton>
          <NavBarButton>Hack</NavBarButton>
          <NavBarButton>Schedule</NavBarButton>
          <NavBarButton>Sponsors</NavBarButton>

          <SignUpButton variant = "outlined">SIGN UP</SignUpButton>
      </div>
    </nav>
  );
};

export default Navbar;
