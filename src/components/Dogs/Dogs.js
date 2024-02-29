import React, { Fragment } from 'react';

function Dogs() {

  const dogs = ([
    {
      name: 'Barbos',
      img: 'https://place.dog/300/200'
    },
    {
      name: 'Sharik',
      img: 'https://place.dog/300/201'
    },
    {
      name: 'Bobik',
      img: 'https://place.dog/300/202'
    }]
  );

  return (
    <Fragment>
      <h1 style={{ marginTop: '50px' }}> Собакены </h1>
      <div className="container">
        <div className="row">
          {dogs.map((dog, index) => (
            <div key={index} className="col-sm">
              <h3>{dog.name}</h3>
              <img src={dog.img} alt={`dog ${dog.name}`} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Dogs;