import data from '../../utils/data';
import { Card} from 'antd'
import { formatPrice } from '../../utils/helper';

function FoodAppetizer() {
	return (
		<div className="food__appeizer">
			<div className="food__appeizer__title">
				<h2>MÓN KHAI VỊ</h2>
        <a href="" className="btn__detail">Xem chi tiết <i className="material-icons">arrow_forward</i></a>
			</div>
			<div className="food__appeizer__content">
            {data.foods.filter(item=> item.category==="mon-khai-vi").map(food => {
                return (
                  <div key={food.name}>
                    <Card
                      hoverable
                      cover={<img alt="Modern Design" src="/images/mon-an/bo-luc-lac.jpg" />}
                    >
                      <h3>{food.name}</h3>
                      <div className="price">
                          {food && food.prices.map((item) => {
                            return (
                              <p key={item.id}>
                                <span className="food__size">{item.size}</span>
                                <span>{formatPrice(item.price)}</span>
                              </p>
                            )
                          }
                            )
                          }
                          
                      </div>
                    </Card>
               </div>
            )})
            }
   
			</div>
		</div>
	)
}

export default FoodAppetizer
