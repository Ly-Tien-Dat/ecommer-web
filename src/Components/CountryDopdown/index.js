import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index) => {
    setSelectedTab(index);
    setIsOpenModel(false);
  };
  useEffect(() => {
    setCountryList(context.countryList);
  }, []);
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
  };

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
          <input
            type="text"
            placeholder="Search for locations ..."
            onChange={filterList}
          />
          <Button>
            <IoSearchSharp />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
