import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {

  const [isOpenSideBarNav,setIsOpenSideBarNav ] = useState(true);
  return (
    <nav className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button className="allCartTab align-items-center" onClick={() => (setIsOpenSideBarNav(!isOpenSideBarNav))}>
                <span className="icon1 me-2">
                  <IoMenu />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2 ms-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div className={`sidebarNav ${isOpenSideBarNav===true ? 'open' : ''}`}>
                <ul>
                  <li>
                    <Link to="/">
                      <Button>men</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>women</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>beauty</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>gift</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center ">
            <ul className="list list-inline w-100">
              <li className="list-inline-item ms-auto">
                <Link to="/">
                  <Button> Home </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>men</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>cothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Groming for men</Button>
                  </Link>
                  <Link to="/">
                    <Button>Sungglasses & Frames</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>Jewellery</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>women</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>cothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Groming for men</Button>
                  </Link>
                  <Link to="/">
                    <Button>Sungglasses & Frames</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>Jewellery</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>beauty</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>cothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Groming for men</Button>
                  </Link>
                  <Link to="/">
                    <Button>Sungglasses & Frames</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories</Button>
                  </Link>
                  <Link to="/">
                    <Button>Jewellery</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>watches</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>kids</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>gift</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>contact</Button>
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
