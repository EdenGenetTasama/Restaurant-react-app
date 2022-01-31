import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div>
        <Link to="/home">
          <button type="button">Home</button>
        </Link>
      </div>
      <div>
        <Link to="/Menu">
          <button type="button">Menu</button>
        </Link>
      </div>
      <div>
        <Link to="/Orders">
          <button type="button">Orders</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
