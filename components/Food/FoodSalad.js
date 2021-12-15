import data from '../../utils/data';
import { Card} from 'antd'
import { formatPrice } from '../../utils/helper';

function FoodSalad() {
	return (
		<div className="food__salad">
			<div className="food__salad__title">
				<h2>MÓN GỎI</h2>
				<a href="" className="btn__detail">Xem chi tiết <i className="material-icons">arrow_forward</i></a>
			</div>
			<div className="food__salad__content">
            {data.foods.filter(item=> item.category==="mon-goi").map(food => {
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

export default FoodSalad
