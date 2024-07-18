// src/Components/LearnVideoPage.jsx
import React from 'react';
import References from './References';

const LearnVideoPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Learn Videos</h1>
      <References maxDisplay={12}/>
    </div>
  );
};

export default LearnVideoPage;
