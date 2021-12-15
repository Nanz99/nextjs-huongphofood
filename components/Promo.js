import React from 'react'
import NextLink from 'next/link'

function Promo() {
	return (
		<div className="promo__content">
			<NextLink href="/">
				<a > 
					<img src="/images/promo-1.jpg" alt="" />
				</a>
			</NextLink>
			<NextLink href="/">
				<a> 
					<img src="/images/promo-2.jpg" alt="" />
				</a>
			</NextLink>

			
		</div>
	)
}

export default Promo
