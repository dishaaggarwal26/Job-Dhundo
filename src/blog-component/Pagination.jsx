import React from 'react'

const Pagination = ({onPageChange, currentPage, totalPages}) => {
    
    const renderPageinationLinks =()=>{
        return Array.from({length: totalPages}, (_,i)=>i + 1).map((pageNumber)=>(
            <li className={pageNumber === currentPage ?"activePagination":""} key={pageNumber}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
      <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={()=> onPageChange(currentPage -1)} disabled={currentPage===1} className='cursor-pointer hover:text-pink-500'>Previous</button>
        </li>
        <div className='flex gap-1'>
            {renderPageinationLinks()}
        </div>
        <li>
            <button onClick={()=> onPageChange(currentPage +1)} disabled={currentPage === totalPages} className='cursor-pointer hover:text-pink-500'>Next</button>
        </li>
      </ul>
  )
}

export default Pagination
