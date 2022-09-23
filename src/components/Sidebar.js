import React from 'react'
import { Link } from 'react-router-dom' 

const Sidebar = ({ toggle, handleCloseBtn }) => {
  return (
    <div className={`sidebar__container ${toggle ? 'sidebar__container-active' : ''}`}>
        <div className="closeBtn__container">
            <div className="closeBtn" onClick={handleCloseBtn}>X</div>
        </div>
        <p className='sidebar__text'>Categories</p>
        <div className="categories__container">
            <Link to="/" className="category">General</Link>
            <Link to="/business" className="category">Business</Link>
            <Link to="/entertainment" className="category">Entertainment</Link>
            <Link to="/health" className="category">Health</Link>
            <Link to="/science" className="category">Science</Link>
            <Link to="/technology" className="category">Technology</Link>
            <Link to="/sports" className="category">Sport</Link>
        </div>
    </div>
  )
}

export default Sidebar

// #808290!important