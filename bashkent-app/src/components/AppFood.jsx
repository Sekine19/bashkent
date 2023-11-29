import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { foodCategory, foods } from '../data/FoodData'
import { useNavigate, useParams } from 'react-router-dom'



export const AppFood = () => {

  const {categoryID} = useParams();
  const navigate = useNavigate();
  const [activeCategoryID, setActiveCategoryID] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(categoryID){
      navigate('/food')
      setActiveCategoryID(parseInt(categoryID))
    }
  }, [categoryID])


  useEffect(() => {
    let filteredProducts = foods.filter((food) => food.categoryId === activeCategoryID);
    setProducts([...filteredProducts])
  }, [activeCategoryID])

  return (
    <Layout>
      <div className='app-food'>
        <div className="container">
          <div className="food-buttons">
            {
              foodCategory.map((category) => (
                <button className={category.id === activeCategoryID ? 'active' : ''} key={category.id} onClick={() => setActiveCategoryID(category.id)} >{category.title}</button>
              ))
            }
          </div>
          <div className="food-content">
            <div className="row">
              {
                products.map((card) => (
                  <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                    <div key={card.id} className="food-card">
                      <div className="food-img">
                        <img src={card.image} alt="" />
                      </div>
                      <div className="content">
                        <h5 className="title">{card.title}</h5>
                        <div className="text">
                          <p>{card.text}</p>
                        </div>
                        <div className="price">
                          <span>{card.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
