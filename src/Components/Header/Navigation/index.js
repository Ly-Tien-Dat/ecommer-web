import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCartTab align-items-center">
              <span className="icon1 me-2">
                <IoMenu />
              </span>
              <span className="text">All Categories</span>
              <span className="icon2 ms-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center ">
            <ul className="list list-inline w-100">
              <li className="list-inline-item ">
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Son</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Go</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Han</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Hell</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
