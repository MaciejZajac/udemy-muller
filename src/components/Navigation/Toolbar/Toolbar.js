import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NagivationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const Toolbar = ({ click }) => (
  <header className={classes.Toolbar}>
    <DrawerToggle click={click} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
