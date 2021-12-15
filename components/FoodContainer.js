import React from 'react'
import FoodAppetizer from './Food/FoodAppetizer'
import FoodSalad from './Food/FoodSalad'
import FoodBeLike from './Food/FoodBeLike'
import FoodNew from './Food/FoodNew'
import Promo from './Promo'


function FoodContainer() {
	return (
		<div className="food-container">
			<FoodNew/>
			<FoodBeLike/>
			<Promo/>
			<FoodAppetizer/>
			<FoodSalad/>
		</div>
	)
}

export default FoodContainer
