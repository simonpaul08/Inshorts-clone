import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { v4 as uuid } from 'uuid'
import loading from '../loading.gif'

const Main = () => {

    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    // const fetchNews = async () => {
    //     setIsLoading(true)
    //     const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=687fd619ebcd4209baf5b4e94d04ec5b&page=${page}&pageSize=10`
    //     const data = await fetch(url)
    //     const parsedData = await data.json()
    //     setNews(parsedData.articles)
    //     setTotalArticles(parsedData.totalResults)
    //     setIsLoading(false)
    // }

    // useEffect(() => {
    //     fetchNews()

    //      // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])


    const handleClick = () => {
        if(news.length !== totalArticles){
            setPage(page + 1)
        }
    }

    // const fetchMoreData = async () => {
    //     setIsLoading(true)
    //     const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=687fd619ebcd4209baf5b4e94d04ec5b&page=${page}&pageSize=10`
    //     const data = await fetch(url)
    //     const parsed = await data.json()
    //     setNews(news.concat(parsed.articles))
    //     setIsLoading(false)
    // }
    

    // useEffect(() => {
    //     fetchMoreData()

    //      // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [page])




  return (
    <div className='main__container'>
        <div className="news__container">
            {news.map((article => {
                return (
                    <NewsItem key={uuid()} news={article}/>
                )
            }))}
        </div>
        
        {isLoading && <div className='loading'>
            <img src={loading} alt="loading" />
        </div>}

        <div className="btn__container">
            <button className='btn load__more' onClick={handleClick}>Load More</button>
        </div>
    </div>
  )
}

export default Main