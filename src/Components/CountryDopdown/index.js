import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <>
      <Button className="countryDropdown" onClick={() => setIsOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">Vietnam</span>
        </div>
        <span className="ms-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModel}
        onClose={() => setIsOpenModel(false)}
        className="locationModel"
        slots={{
          transition: Transition,
        }}
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpenModel(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search for locations ..." />
          <Button>
            <IoSearchSharp />
          </Button>
        </div>

        <ul className="countryList mt-3">
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Vietnam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>China</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>United States</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>India</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Japan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Taiwan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>German</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Russia</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Vietnam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>China</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>United States</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>India</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Japan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Taiwan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>German</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Russia</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Vietnam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>China</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>United States</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>India</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Japan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Taiwan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>German</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModel(false)}>Russia</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
