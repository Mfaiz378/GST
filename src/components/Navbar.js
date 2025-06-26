import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div>GST & Services</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
}

export default Navbar;
