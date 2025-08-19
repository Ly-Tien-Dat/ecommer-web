import Logo from "../../assets/images/pngegg.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDopdown";
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";

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

                {/* Header search start here ==> */}
                <div className="headerSearch ml-4 mr-4">
                  <input type="text" />
                  <Button>
                    <IoSearchSharp />
                  </Button>
                </div>
                {/* <== Header search start here  */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
