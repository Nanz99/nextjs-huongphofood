import React from 'react'
import data from '../../utils/data';
import { Card, Row, Col } from 'antd'
import { formatPrice } from '../../utils/helper';

function FoodNew() {
	return (
		<div className="food__new">
			<div className="food__new__title">
				<h2>MÓN MỚI</h2>
				<a href="" className="btn__detail">Xem chi tiết <i className="material-icons">arrow_forward</i></a>
			</div>
			<div className="food__content">
        <Row gutter={[16, 16]}>
            {data.foods.filter(item=> item.category==="mon-moi").map(food => {
                return (
                  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} key={food.name}>
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
                </Col>
                )})
            }
          </Row>
			</div>
		</div>
	)
}

export default FoodNew
