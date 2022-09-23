import React from 'react'

const Sidebar = ({ toggle, handleCloseBtn }) => {
  return (
    <div className={`sidebar__container ${toggle ? 'sidebar__container-active' : ''}`}>
        <div className="closeBtn__container">
            <div className="closeBtn" onClick={handleCloseBtn}>X</div>
        </div>
        <p className='sidebar__text'>Categories</p>
        <div className="categories__container">
            <p className="category">General</p>
            <p className="category">Business</p>
            <p className="category">Entertainment</p>
            <p className="category">Health</p>
            <p className="category">Science</p>
            <p className="category">Technology</p>
            <p className="category">Sport</p>
        </div>
    </div>
  )
}

export default Sidebar

// #808290!important