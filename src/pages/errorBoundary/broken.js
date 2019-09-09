import React from 'react';

//会报错的
const  Broken = () => {
  return (
    <div>
      {
        [].map(val => val)
      }
    </div>
  )
}

export default Broken