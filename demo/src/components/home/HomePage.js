import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [{
				id: 0,
				image: 'https://images.media-allrecipes.com/images/59076.jpg',
				name: 'Bread Recipes',
				url: 'https://www.allrecipes.com/recipes/156/bread/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 1,
				image: 'https://images.media-allrecipes.com/images/61401.jpg',
				name: 'Chicken Recipes',
				url: 'https://www.allrecipes.com/recipes/201/meat-and-poultry/chicken/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 2,
				image: 'https://images.media-allrecipes.com/images/74870.jpg',
				name: 'Vegan Recipes',
				url: 'https://www.allrecipes.com/recipes/1227/everyday-cooking/vegan/?internalSource=top%20hubs&referringContentType=home%20page'
			}, {
				id: 3,
				image: 'https://images.media-allrecipes.com/images/77520.jpg',
				name: 'Pasta and Noodle Recipes',
				url: 'https://www.allrecipes.com/recipes/95/pasta-and-noodles/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 4,
				image: 'https://images.media-allrecipes.com/images/58716.jpg',
				name: 'Cake Recipes',
				url: 'https://www.allrecipes.com/recipes/276/desserts/cakes/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 5,
				image: 'https://images.media-allrecipes.com/images/61217.jpg',
				name: 'Pork Recipes',
				url: 'https://www.allrecipes.com/recipes/205/meat-and-poultry/pork/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 6,
				image: 'https://images.media-allrecipes.com/images/51520.jpg',
				name: 'Salad Recipes',
				url: 'https://www.allrecipes.com/recipes/96/salad/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 7,
				image: 'https://images.media-allrecipes.com/images/75972.jpg',
				name: 'Shrimp Recipes',
				url: 'https://www.allrecipes.com/recipes/430/seafood/shellfish/shrimp/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 8,
				image: 'https://images.media-allrecipes.com/images/61377.jpg',
				name: 'Cookie Recipes',
				url: 'https://www.allrecipes.com/recipes/362/desserts/cookies/?internalSource=hub%20nav&referringId=1&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 9,
				image: 'https://images.media-allrecipes.com/images/55483.jpg',
				name: 'Mexican Recipes',
				url: 'https://www.allrecipes.com/recipes/728/world-cuisine/latin-american/mexican/?internalSource=hub%20nav&referringId=86&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 10,
				image: 'https://images.media-allrecipes.com/images/61813.jpg',
				name: 'Italian Recipes',
				url: 'https://www.allrecipes.com/recipes/723/world-cuisine/european/italian/?internalSource=hub%20nav&referringId=86&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 11,
				image: 'https://images.media-allrecipes.com/images/74208.jpg',
				name: 'Chinese Recipes',
				url: 'https://www.allrecipes.com/recipes/695/world-cuisine/asian/chinese/?internalSource=hub%20nav&referringId=86&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 12,
				image: 'https://images.media-allrecipes.com/images/55319.jpg',
				name: 'Indian Recipes',
				url: 'https://www.allrecipes.com/recipes/233/world-cuisine/asian/indian/?internalSource=hub%20nav&referringId=86&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 13,
				image: 'https://images.media-allrecipes.com/images/75366.jpg',
				name: 'Thai Recipes',
				url: 'https://www.allrecipes.com/recipes/702/world-cuisine/asian/thai/?internalSource=hub%20nav&referringId=86&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}, {
				id: 14,
				image: 'https://images.media-allrecipes.com/images/77914.jpg',
				name: 'Asian Recipes',
				url: 'https://www.allrecipes.com/recipes/227/world-cuisine/asian/?internalSource=hub%20nav&referringId=86&referringContentType=recipe%20hub&linkName=hub%20nav%20daughter&clickId=hub%20nav%202'
			}]
		};
	}
	render() {
		const map = this.state.items.map((item) => {

			return (
				<div key={item.id} className="item">
					<img src={item.image} height="200" width="300" alt="image"/>
					<br />
					<a href={item.url}>{item.name}</a>
				</div>
			);

		});

		return (
			<div>
				<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light homebox">
					<div className="p-lg-5 mx-auto my-5">
						<h1 className="display-2 font-weight-normal">Welcome to CookBook.co</h1>
						<p className="font-weight-normal subTitleWords">Find your recipes in our website and learn how to cook delicious foods. </p>
						<Link to="about" className="btn btn-secondary btn-lg">Learn more about us</Link>
					</div>
				</div>

				<div id="container">
					<div className="categoryName">
						<h1>Food Category</h1>
					</div>
					{map}
				</div>
			</div>

		);
	}
}

export default HomePage;
