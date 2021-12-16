import data from '../../utils/data';
import PriceSize from '../PriceSize';

function FoodSalad() {
  return (
    <div className="food__salad">
      <div className="food__salad__title">
        <h2>
          <img src="/images/icons/khaivi.png" className="logo__title" alt="" />MÓN GỎI
        </h2>
        <a href="" className="btn__detail">Xem chi tiết <i className="material-icons">arrow_forward</i></a>
      </div>
      <div className="food__salad__content">
        {data.foods.filter(item => item.category === "mon-goi").map(food => {
          return (
            <div key={food.id} className="food__item">
              <div className="food__image">
                <img alt="Modern Design" src={food.image} />
              </div>
              <div className="food__item__content">
                <h3>{food.name}</h3>
                <PriceSize prices={food.prices} />
              </div>
            </div>
          )
        })
        }

      </div>
    </div>
  )
}

export default FoodSalad
