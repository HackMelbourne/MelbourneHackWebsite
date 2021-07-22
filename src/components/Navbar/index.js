import styles from "./Navbar.module.scss";
import { NavBarButton, SignUpButton, HackDropDown } from "./components-styled";
import { Link } from "react-router-dom";
import navbar_logo from "../assets/logo.png";
import {Link as ScrollLink} from "react-scroll";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className = {styles.logo}>
          <img alt="HackMelb Logo Bulb!" src = {navbar_logo}/>
          <h2>Melbourne Hack</h2>
          <h3>by HackMelbourne</h3>
        </div>
      </Link>
      <div className={styles.links}>
          <NavBarButton href = "/Updates">Updates</NavBarButton>
          <NavBarButton><HackDropDown>Hack</HackDropDown></NavBarButton>
          <NavBarButton href = "/Prizes">Prizes</NavBarButton>
          <NavBarButton href = "/Sponsors">Sponsors</NavBarButton>
          <SignUpButton variant = "outlined">SIGN UP</SignUpButton>
      </div>
    </nav>
  );
};

export default Navbar;
