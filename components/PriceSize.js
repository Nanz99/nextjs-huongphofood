import React from 'react'
import { formatPrice } from '../utils/helper'

function PriceSize({prices}) {
	return (
		<div className="price">
		{prices.map((item) => {
		  return (
			 <p key={item.id} style={{display: 'flex', alignItems: 'center'}}>
				<span className={`food__size bg-size-${item.size}`}>{item.size}</span>
				<span>{formatPrice(item.price)}</span>
			 </p>
		  )
		}
		  )
		}
		
  </div>
	)
}

export default PriceSize
