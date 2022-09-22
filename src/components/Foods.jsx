import React, { useState, useEffect } from 'react'
import { data } from '../data/data.js'
import FoodCard from './FoodCard'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const styles = {
  btnFilter: `hover:bg-orange-500 hover:text-white border-orange-500 text-orange-500 rounded-full`,
  btnFilterChecked: `bg-orange-500 text-white rounded-full`
}

function Foods() {
  const [foods, setFoods] = useState(data)
  const [filter, setFilter] = useState({
    category: [],
    price: []
  })
  
  const filterType = type => {
    if(filter.category.includes(type)){ //Quitar una categoria del filtrado
      const newCategories = filter.category.filter(item => item !== type)
      setFilter({...filter, category: newCategories})
    } else { //Agregar nueva categoría al filtrado
      setFilter({...filter, category: [...filter.category, type]})
    }
  }
  const filterPrice = type => {
    if(filter.price.includes(type)){ //Quitar una categoria del filtrado
      const newCategories = filter.price.filter(item => item !== type)
      setFilter({...filter, price: newCategories})
    } else { //Agregar nueva categoría al filtrado
      setFilter({...filter, price: [...filter.price, type]})
    }
  }
  
  const filterResults = () => {
    const filtered = data.filter(food => 
      (filter.category.includes(food.category) || filter.category.length == 0) && 
      (filter.price.includes(food.price) || filter.price.length == 0)
    )
    setFoods(filtered)
  } 

  useEffect(() => {
    filterResults()
  }, [filter])
    
    
  AOS.init();
  return (
    <div className='max-w-[1540px] mx-auto p-4'>
      <h1 className='text-3xl text-orange-500 font-bold text-center' data-aos='fade-left'>
        Top Rated Menu Items
      </h1>

      {/* Filter Type */}
      <p className='text-black text-left font-bold'>Filter type</p>
      <div className='flex justify-between md:gap-5 md:justify-start mt-2' data-aos='fade-right'>
        <button 
          className={filter.category == '' ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => setFilter({...filter, category: []})}
        >
            All
        </button>
        <button 
          className={filter.category.includes('burger') ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterType('burger')}
        >
            Burgers
        </button>
        <button 
          className={filter.category.includes('pizza') ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterType('pizza')}
        >
            Pizza
        </button>
        <button 
          className={filter.category.includes('salad') ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterType('salad')}
        >
            Saled
        </button>
        <button 
          className={filter.category.includes('chicken')  ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterType('chicken')}
        >
            Chicken
        </button>
      </div>

      {/* Filter Price */}
      <p className='text-black text-left font-bold mt-3'>Filter Price</p>
      <div className='flex justify-start mt-2 gap-[40px]' data-aos='fade-right'>
        <button 
          className={filter.price == '' ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => setFilter({...filter, price: []})}
        >
            All
        </button>
        <button 
          className={filter.price.includes('$') ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterPrice('$')}
        >
            $
        </button>
        <button 
          className={filter.price.includes('$$') ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterPrice('$$')}
        >
            $$
        </button>
        <button 
          className={filter.price.includes('$$$') ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterPrice('$$$')}
        >
            $$$
        </button>
        <button 
          className={filter.price.includes('$$$$') ? styles.btnFilterChecked : styles.btnFilter}
          onClick={() => filterPrice('$$$$')}
        >
            $$$$
        </button>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-8'>
        {
          foods.length > 0 ? 
          foods.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))
          : <h1 className='text-3xl text-center mt-10'>Foods not found :(</h1>
        }
      </div>
    </div>
  )
}

export default Foods