import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (

		<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light homebox">
			<div className="p-lg-5 mx-auto my-5">
				<h1 className="display-2 font-weight-normal">Welcome to CookBook.co</h1>
				<p className="font-weight-normal subTitleWords">Find your recipes in our website and learn how to cook delicious foods. </p>
				<Link to="about" className="btn btn-secondary btn-lg">Learn more about us</Link>
			</div>
		</div>

    );
  }
}

export default HomePage;
