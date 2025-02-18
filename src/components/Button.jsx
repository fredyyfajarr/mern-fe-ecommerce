import React from 'react';

const Button = () => {
  return (
    <button className="overflow-hidden relative w-40 p-2 h-12 bg-gradient-to-r from-primary to-secondary text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group shadow-lg">
      Our Product ?
      <span className="absolute w-44 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
      <span className="absolute w-44 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
      <span className="absolute w-44 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left" />
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Explore Now!</span>
    </button>
  );
}

export default Button;