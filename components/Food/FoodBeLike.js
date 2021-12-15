
import React from 'react'
import data from '../../utils/data';
import { Card, Row, Col } from 'antd'

function FoodBeLike() {
	return (
		<div className="food__new">
			<div className="food__new__title">
				<h2>MÓN MỚI</h2>
				<a href="" className="btn__detail">Xem chi tiết <i className="material-icons">arrow_forward</i></a>
			</div>
			<div className="food__content">
        <Row gutter={[16, 16]}>
            {data.foods.filter(item=> item.category==="mon-yeu-thich").map(food => {
                return (
                  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 4.8 }} key={food.name}>
                    <Card
                      hoverable
                      cover={<img alt="Modern Design" src="/images/mon-an/bo-luc-lac.jpg" />}
                    >
                      <h3>{food.name}</h3>
                      <div className="price">
                          {food && food.prices.map((item) => {
                            return (
                              <p>
                                <span className="food__size">{item.size}</span>
                                <span>{item.price}</span>
                              </p>
                            )
                          }
                            )
                          }
                          
                      </div>
                    </Card>
                </Col>
            )})
            }
          </Row>
			</div>
		</div>
	)
}

export default FoodBeLike
