import React from 'react'

const CategorSelection = ({onSelectCategory, activeCategory}) => {
    const categories = ["Startups", "Security", "AI","Apps","Tech","Works","Career Advice"];

  return (
    <div className='px-10 mb-8 lg:space-x-16 flex flex-wrap item-center border-b-2 py-5 text-gray-900 font-semibold'>
      <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}><span className='mr-5'>All</span> </button>
      {
        categories.map((category)=>(
            <button 
            onClick={() => onSelectCategory(category)}
            className={`mr-4 md:mr-12 space-x-16 cursor-pointer ${activeCategory === category ? "active-button":""}`}
            key={category}>{category}</button>
        ))
      }
    </div>
  )
}

export default CategorSelection
