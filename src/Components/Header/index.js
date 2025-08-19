import Logo from "../../assets/images/pngegg.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDopdown";
import Button from "@mui/material/Button";
import SearchBox from "./SearchBox";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              This web is under construction
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />
                <SearchBox />
                <div className="part3 d-flex align-items-center ms-auto">
                  <Button className="circle">
                    <FaRegCircleUser />
                  </Button>
                  <div className="ms-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ms-2">
                      <Button className="circle">
                        <IoBagCheckOutline />
                      </Button>
                      <span className="cartCount d-flex align-items-center justify-content-center">
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>
    </>
  );
};
export default Header;
