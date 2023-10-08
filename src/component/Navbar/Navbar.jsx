import { AiFillHome } from "react-icons/ai";
import { GiAwareness } from "react-icons/gi";
import { MdReportProblem } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiRoadMapFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='sticky-navbar'>
      <ul>
        <NavLink to='/'>
          <AiFillHome />
        </NavLink>
        <NavLink to='/awareness'>
          <GiAwareness />
        </NavLink>
        <NavLink to='/report'>
          <MdReportProblem />
        </NavLink>
        <NavLink to='/profile'>
          <FaUserAlt />
        </NavLink>
        <NavLink to='/map'>
          <RiRoadMapFill />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
