import React from 'react'
import NextLink from 'next/link'
import logoHP from '../public/images/logo.png'

function NavBar() {
	return (
		<nav className="header__main">
			<div className="nav__wrap">
				<NextLink href="/">
					{/* <a href="">
						<img src={logoHP} alt="" className='logo' />
					</a> */}
					<a href="">Huong Pho</a>
				</NextLink>
				<ul className="nav__menu">
					<li>
						<NextLink href="/">
							<a href="">
								Trang chủ</a>
						</NextLink>
					</li>
					<li>
						<NextLink href="/">
							<a href="">Món ngon</a>
						</NextLink>
					</li>
					<li>
						<NextLink href="/"><a href="">
							Dịch vụ tiệc</a></NextLink>
					</li>
					<li>
						<NextLink href="/"><a href="">
							Tin tức</a></NextLink>
					</li>
					<li>
						<NextLink href="/"><a href="">Liên hệ</a></NextLink>
					</li>
				</ul>
			</div>
		</nav>

	)
}

export default NavBar

