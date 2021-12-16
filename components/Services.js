import data from '../utils/data'

function Services() {
	return (
		<div className="service__container">
		<div className="service__title">
			<a>
				<img src="/images/ser-logo.png" alt="" className="logo-ser"/>
			</a>
			<h2>DỊCH VỤ NỔI BẬT</h2>
		</div>
		<div className="service__content">
			{
				data.services.map(ser => {
					return (
						<div className={`service__item bg__service${ser.id}`} key={ser.name}>
							<div className="service__item__content">
								<h3>{ser.name}</h3>
								<p>{ser.description}</p>
								<button className="btn__detail-2">Xem Chi Tiết</button>
							</div>
						</div>
					)
				})
			}
		</div>
		
	</div>
	)
}

export default Services
