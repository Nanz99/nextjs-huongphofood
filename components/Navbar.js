import NextLink from 'next/link'


function NavBar() {
	return (
		<nav className="header__main">
			<div className="nav__wrap">
				<NextLink href="/">
					<a href="">
						<img src='/images/logo.png' alt="" className='logo' />
					</a>

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
							<a href=""> Món ngon <i className="material-icons">expand_more</i></a>
						</NextLink>
					</li>
					<li>
						<NextLink href="/"><a href="">
							Dịch vụ tiệc
							<i className="material-icons">expand_more</i></a></NextLink>
					</li>
					<li>
						<NextLink href="/"><a href="">
							Tin tức <i className="material-icons">expand_more</i>
							</a></NextLink>
					</li>
					<li>
						<NextLink href="/"><a href="">Liên hệ</a></NextLink>
					</li>
					<li>
						<span className='search__box'>
							<input type="text" placeholder="Tìm Kiếm" />
							<button className='search__icon'><i className="material-icons">search</i></button>
						</span>
					</li>
					<li>
						<NextLink href="/cart">
								<span className="cart"> 
									<img src="/images/icons/shopping-cart.png" alt="" className="shoping__cart" />
									<span className="count">3</span>
								</span>
						</NextLink>
					</li>
				</ul>
			</div>
		</nav>

	)
}

export default NavBar

