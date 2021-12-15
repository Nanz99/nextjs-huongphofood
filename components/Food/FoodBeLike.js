
import React from 'react'
import data from '../../utils/data';
import { Card, Row, Col } from 'antd'

function FoodBeLike() {
	return (
		<div className="food__belike">
			<div className="food__belike__title">
				<h2>MÓN DUOC YEU THICH</h2>
			</div>
			<div className="food__belike__content">
            {data.foods.filter(item=> item.category==="mon-yeu-thich").map(food => {
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
                                <span>{item.price}</span>
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

export default FoodBeLike
