import { IoSearchSharp } from "react-icons/io5";
import Button from "@mui/material/Button";

const SearchBox = () => {
  return (
    <div className="headerSearch ms-3 me-3">
      <input type="text" placeholder="Search for products ..." />
      <Button>
        <IoSearchSharp />
      </Button>
    </div>
  );
};
export default SearchBox;
