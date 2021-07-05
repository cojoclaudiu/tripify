import React from 'react';
import './Categories.css';

const dataCategories = ['Hotels', 'Holiday Rentals', 'Things to Do', 'Restaurants', 'Travel Forums', 'More'];

const Categories = () => {
  const items = arr =>
    arr.map(item => (
      <div key={item.replace(/\s/g, '')} className="categoryItem">
        <span className={item.includes('Rentals') ? 'wrapWord' : null}>{item}</span>
      </div>
    ));

  return <div className="subHeaderCategories widthAlign">{items(dataCategories)}</div>;
};

export default Categories;
