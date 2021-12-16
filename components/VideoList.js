import Slider from "react-slick";

function VideoList() {
	var settings = {
      dots: true,
      infinite: true,
		padding:10,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
	return (
		<div className="video__content">
			<Slider {...settings} className="video__list">
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/1.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Tiệc buffet</h3>
          </div>
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/2.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Tiệc tại nhà</h3>
          </div>
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/3.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Đồ ăn nhanh</h3>
          </div>
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/4.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Tiệc cưới</h3>
          </div>
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/5.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Tiệc hoa quả</h3>
          </div>
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/1.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Tiệc tại nhà</h3>
					</div>
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/2.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Tiệc buffet</h3>
          </div>
          <div className="video__item">
					<div className="video__image">
						<img src="/images/video/3.png" alt="" />
						<span className="playvideo">
						<i className="material-icons">play_arrow</i>
						</span>
					</div>
					<h3>Đồ ăn nhanh</h3>
          </div>
  
        </Slider>
		</div>
	)
}

export default VideoList
