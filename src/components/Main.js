import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { v4 as uuid } from 'uuid'

const Main = () => {

    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(0)

    const fetchNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=687fd619ebcd4209baf5b4e94d04ec5b&page=${page}&pageSize=10`
        const data = await fetch(url)
        const parsedData = await data.json()
        setNews(parsedData.articles)
        setTotalArticles(parsedData.totalResults)
    }

    useEffect(() => {
        fetchNews()

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleClick = () => {
        if(news.length !== totalArticles){
            setPage(page + 1)
        }
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=687fd619ebcd4209baf5b4e94d04ec5b&page=${page}&pageSize=10`
        const data = await fetch(url)
        const parsed = await data.json()
        setNews(news.concat(parsed.articles))
    }
    

    useEffect(() => {
        fetchMoreData()

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])




  return (
    <div className='main__container'>
        <div className="news__container">
            {news.map((article => {
                return (
                    <NewsItem key={uuid()} news={article}/>
                )
            }))}
        </div>
        <div className="btn__container">
            <button className='btn load__more' onClick={handleClick}>Load More</button>
        </div>
    </div>
  )
}

export default Main