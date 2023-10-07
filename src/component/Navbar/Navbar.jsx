import { AiFillHome } from 'react-icons/ai';
import { GiAwareness } from 'react-icons/gi';
import { MdReportProblem } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="sticky-navbar">
      <ul>
        <NavLink to="/" > <AiFillHome /> </NavLink>
        <NavLink to="/awareness" > <GiAwareness /> </NavLink>
        <NavLink to="/report" ><MdReportProblem /> </NavLink>
        <NavLink to="/profile" > <CgProfile /> </NavLink>

      </ul>
    </nav>
  );
};

export default Navbar;
