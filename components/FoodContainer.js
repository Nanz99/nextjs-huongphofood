import React from 'react'
import FoodBeLike from './Food/FoodBeLike'
import FoodNew from './Food/FoodNew'
import Promo from './Promo'


function FoodContainer() {
	return (
		<div className="">
			<FoodNew/>
			<FoodBeLike/>
			<Promo/>
		</div>
	)
}

export default FoodContainer
