import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';

const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDropdown">
        <div className="info d-flex flex-column">
          <span>Your location</span>
          <span>Vietnam</span>
        </div>
      </Button>
    </>
  );
};

export default CountryDropdown;
