import React from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'


function Breadcrumb({title,food}) {
	return (
		<div role="presentation">
		  <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{
			  padding: '24px 0'
		  }}>
			 <Link underline="hover" color="#CDA922" href="/">
				Trang chủ
			 </Link>
			 {food && <Link
				color="inherit"
				href="/food-new"
			 >
				Món mới
			 </Link>}
			 /
			 <Typography color="text.primary">{title}</Typography> 
			 
		  </Breadcrumbs>
		</div>
	 );
}

export default Breadcrumb
