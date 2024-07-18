// src/Components/NewsSection.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard.jsx';

const NewsSection = ({maxDisplay}) => {
  const [news, setNews] = useState([]);
  const apiKey = "2yc9umFFUSJIEmELts4CHRA5DWrxDdBH"; // Replace with your actual API key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.apilayer.com/financelayer/news', {
          params: {
            date: 'today',
            keywords: 'at&t',
            sources: 'seekingalpha.com',
            keyword: 'merger',
            tickers: 'dis',
          },
          headers: {
            apikey: apiKey,
          },
        });
        setNews(response.data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className=''>
      <h1 className="text-2xl font-semibold mb-4">Latest News</h1>
      <div className='grid grid-cols-3 '>
      {news.length > 0 ? (
        news.slice(0, maxDisplay).map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            url={article.url}
            description={article.description}
            source={article.source}
            publishedAt={article.published_at}
          />
        ))
    ) : (
        <p>Loading news...</p>
    )}
    </div>
    </div>
  );
};

export default NewsSection;
