import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <IndexLink to="/" activeClassName="active" className="py-2 d-none d-md-inline-block">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active" className="py-2 d-none d-md-inline-block">Recipes</Link>
        {" | "}
        <Link to="/about" activeClassName="active" className="py-2 d-none d-md-inline-block">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
