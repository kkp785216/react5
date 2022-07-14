import React from 'react'
import { useState } from 'react'
import './_categories_bar.scss'
import { useDispatch } from 'react-redux'
import { selectCategory } from '../../Redux/Actions/category.action'

const keywords = [
  "All",
  "Reacet js",
  "Angular js",
  "use of API",
  "Redux",
  "Bollywood",
  "Algorithm Art",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "football",
  "Real Madrid",
  "Gatsby",
  "Poor coder",
  "Shwetbh",
]

const CategoriesBar = () => {

  const dispatch = useDispatch();
  const [activeElement, setActiveElement] = useState('All');
  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(selectCategory(value));
    window.scrollTo({top: 0, ScrollBehavior: 'auto'})
  }

  return (<>
    <div className='categoriesBar'>
      <div>
        {keywords.map((element, index) => {
          return (
            <span
              key={index}
              onClick={() => { handleClick(element) }}
              className={activeElement === element ? 'active' : ''}
              title={element}
            >{element} </span>
          )
        })}
      </div>
    </div>
    <div className="category-manage"></div>
  </>)
}

export default CategoriesBar