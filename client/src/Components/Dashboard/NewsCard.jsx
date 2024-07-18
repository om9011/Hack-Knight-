// src/Components/NewsCard.jsx
import React from 'react';

const NewsCard = ({ title, url, description, source, publishedAt }) => {
  return (
    <div className="border p-4 rounded-lg m-2">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">
        {title}
      </a>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-500">Source: {source}</p>
      <p className="text-sm text-gray-500">Published at: {new Date(publishedAt).toLocaleString()}</p>
    </div>
  );
};

export default NewsCard;
