import React from 'react';
import Tour from './Tour';

// destructure the tours prop right away
const Tours = ({tours, removeTour}) => {
  return <section>
    <div className="title">
      <h2>Ours tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
      })}
    </div>
  </section>
};

export default Tours;
