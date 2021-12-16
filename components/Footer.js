import NextLink from 'next/link'

function Footer() {
	return (
		<div>
			<div className="footer">
				<div className="footer__content">
					<div className="footer__item flex-2 pr-40">
						<NextLink href="/">
							<img src="/images/logo-footer.png" alt=""  />
						</NextLink>
						<h3>HP FOOD - HƯƠNG PHỐ GROUP</h3>
						<p>Được thiết kế ấn tượng độc đáo theo phong cách tân cổ điển Châu Âu. Tọa lạc ngay trung tâm quận Gò Vấp với diện tích hơn 12,675m2 gồm 21 sảnh tiệc.</p>
					</div>
					<div className="footer__item pr-40 pl-40">
						<h2>Hỗ trợ</h2>

						<ul className="footer__nav">
							<li>Dịch vụ khách hàng</li>
							<li>Hòm thư góp ý</li>
							<li>Tải về</li>
							<li>FAQs</li>
						</ul>

					</div>
					<div className="footer__item pl-40">
						<h2>Địa chỉ liên hệ</h2>

						<ul className="footer__nav">
							<li className="company__info"><i className="material-icons">phone</i> Điện thoại: (028) 3989.6179 - (028) 39894610</li>
							<li className="company__info"><i className="material-icons">mail_outline</i> Email: salehuongpho@gmail.com</li>
							<li className="company__info"><i className="material-icons">location_on</i>Địa chỉ: A12 Phan Văn Trị - Phường 7 - Quận Gò Vấp - Tp. Hồ Chí Minh</li>

						
						</ul>
						<ul className="footer__social-icons">
							<li>
								<NextLink href="https://chat.zalo.me">
									<img src="/images/icons/zalo.png" alt="" />
								</NextLink>
							</li>
							<li>
								<NextLink href="https://youtube.com">
									<img src="/images/icons/youtube.png" alt="" />
								</NextLink>
							</li>
							<li>
								<NextLink href="https://facebook.com">
									<img src="/images/icons/fb.png" alt="" />
								</NextLink>
							</li>
							<li>
								<NextLink href="https://www.linkedin.com/">
									<img src="/images/icons/in.png" alt="" />
								</NextLink>
							</li>
							<li>
								<NextLink href="https://instagram.com/">
									<img src="/images/icons/insta.png" alt="" />
								</NextLink>
							</li>
							
						</ul>

					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<p>Copyright © 2022 Nhà hàng tiệc cưới Hương Phố</p>
			</div>
		</div>
	)
}

export default Footer
