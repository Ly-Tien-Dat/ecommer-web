import Logo from '../../assets/images/pngegg.png';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDopdown';

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
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}><img src= {Logo} alt="logo" /></Link>
              </div>
              <div className='col-sm-10 d-flex align-items-center part2'>
                <CountryDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
