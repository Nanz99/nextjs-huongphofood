import React from 'react'
import { formatPrice } from '../utils/helper'
import Image from 'next/image'
import { Typography } from '@mui/material'
function PriceSize({prices}) {
	return (
		<div className="price">
		{prices.map((item) => {
		  return (
			 <Typography component="div" sx={{
				display: 'flex', alignItems: 'center',
				mb: '5px'
			 }} key={item.id}>
				<Image src={item.sizeImg} height={16} width={16} alt="price size" />
				<Typography component="h4" sx={{ml:1}}>{formatPrice(item.price)}</Typography>
			 </Typography>
		  )
		}
		  )
		}
		
  </div>
	)
}

export default PriceSize
