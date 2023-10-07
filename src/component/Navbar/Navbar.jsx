import { AiFillHome } from 'react-icons/ai';
import { GiAwareness } from 'react-icons/gi';
import { MdReportProblem } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="sticky-navbar">
      <ul>
        <li><a href="/"><AiFillHome /></a></li>
        <li><a href="/Awareness"><GiAwareness /></a></li>
        <li><a href="/report"><MdReportProblem /></a></li>
        <li><a href="/profile"><CgProfile /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
