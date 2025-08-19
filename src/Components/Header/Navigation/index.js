import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiCakephp } from "react-icons/si";
import { GiCakeSlice } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { CiIceCream } from "react-icons/ci";
import { GrBlog } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";

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
                <Link to="/"> <GoHome/> &nbsp; Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <SiCakephp/> &nbsp; Baked Goods</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <GiCakeSlice/> &nbsp; Seasonal treats</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <TfiGallery/> &nbsp; Cakes gallery</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <CiIceCream/> &nbsp; ice sceam</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <GrBlog/> &nbsp; Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <MdConnectWithoutContact/> &nbsp; Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
