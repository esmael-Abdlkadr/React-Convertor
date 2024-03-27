
import { Link } from "react-router-dom";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import vite from "/vite.svg"

function NavBarComp() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} >
        <img src={vite} className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> React Convertor</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>

        <NavbarLink href="#">Speech To Text(STT)</NavbarLink>
        <NavbarLink href="#">Text to Speech(TSS)</NavbarLink>
        <Button href="#">Contact the Developer</Button>
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavBarComp;