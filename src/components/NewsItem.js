import React from 'react'

const NewsItem = ({ news }) => {

  return (
    <div className='news__item'>
        <div className="news__image">
            <img src={news.urlToImage} alt="news" />
        </div>
        <div className="news__content">
            <h3 className='news__title'>{news.title}</h3>
            <p className='news__author'><strong>short</strong> by {news.author ? news.author : "Unknown"} / {new Date(news.publishedAt).toLocaleDateString()}</p>
            <p className='news__description'>{news.description}</p>
            <a href={news.url} className="news__read-more">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem