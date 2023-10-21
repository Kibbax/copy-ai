import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 bg-primary absolute ">
      {/* Círculo con borde */}
      <div className="absolute skew-x-[-60deg] z-10 w-[576px] h-[576px] bg-transparent border-2 border-violet-900 border-opacity-30 rounded-full transform rotate-[-45deg]" />

    </div>
  );
};

export default Background;
