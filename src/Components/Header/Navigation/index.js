import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
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
          <div className="col-sm-10 navPart2 d-flex align-items-center ">
            <ul className="list list-inline w-100">
              <li className="list-inline-item ms-auto">
                <Link to="/">
                  {" "}
                  <Button> Home </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> Baked Goods </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> Seasonal treats </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> Cakes gallery </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> ice sceam </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> Blog </Button>{" "}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> Contact </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
