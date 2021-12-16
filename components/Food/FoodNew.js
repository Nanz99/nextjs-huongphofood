import React from 'react'
import data from '../../utils/data';
import { Card, Row, Col } from 'antd'
import { formatPrice } from '../../utils/helper';
import PriceSize from '../PriceSize';

function FoodNew() {
  return (
    <div className="food__new">
      <div className="food__new__title">
        <h2> <img src="/images/icons/new.png" className="logo__title" alt="" />MÓN MỚI</h2>
        <a href="" className="btn__detail">Xem chi tiết <i className="material-icons">arrow_forward</i></a>
      </div>
      <div className="food__new__content">
        {data.foods.filter(item => item.category === "mon-moi").map(food => {
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

export default FoodNew
