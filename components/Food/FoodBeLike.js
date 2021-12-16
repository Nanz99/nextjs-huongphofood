import data from '../../utils/data';
import PriceSize from '../PriceSize';

function FoodBeLike() {
	return (
		<div className="food__belike">
			<div className="food__belike__title">
				<h2><img src="/images/icons/fire.png" className="logo__title" alt=""/> MÓN ĐƯỢC YÊU THÍCH</h2>
			</div>
			<div className="food__belike__content">
            {data.foods.filter(item=> item.category==="mon-yeu-thich").map(food => {
                return (
                  <div key={food.id} className="food__item">
                   <div className="food__image">
                        <img alt="Modern Design" src={food.image}  />
                   </div>
                    <div className="food__item__content">
                      <h3>{food.name}</h3>
                      <PriceSize prices={food.prices} />
                    </div>
                </div>
                )})
            }
   
			</div>
		</div>
	)
}

export default FoodBeLike
