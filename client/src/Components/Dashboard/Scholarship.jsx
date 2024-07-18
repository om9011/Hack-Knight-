import React from 'react';

const Scholarship = () => {
  const handleRedirect = () => {
    window.open('https://www.buddy4study.com/', '_blank');
  };

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-4 text-center'>Scholarship Page</h2>
      <button
        onClick={handleRedirect}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Go to Application
      </button>
      <iframe
        title="Scholarship Application Form"
        src="https://www.buddy4study.com/"
        width="100%"
        height="600"
        frameBorder="0"
        className="mb-4"
      ></iframe>
    </div>
  );
};

export default Scholarship;
