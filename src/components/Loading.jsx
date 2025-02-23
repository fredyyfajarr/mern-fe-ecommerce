import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="animate-bounce">
        <span className="loading loading-infinity loading-lg text-primary"></span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-base-content animate-pulse">
        Loading...
      </h2>
      <p className="mt-2 text-sm text-base-content/70">
        Mohon di tunggu ya...
      </p>
    </div>
  );
};

export default Loading;
