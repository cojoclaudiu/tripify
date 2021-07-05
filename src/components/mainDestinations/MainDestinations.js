import './MainDestinations.css';
import React, { useState, useEffect } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';

const mainDestinations = [
  {
    title: 'Tulum, Mexico',
    img: '/assets/tulum.jpg'
  },

  {
    title: 'Bora Bora, French Polynesia',
    img: '/assets/bora.jpg'
  },

  {
    title: 'Hawaii',
    img: '/assets/hawaii.jpg'
  },

  {
    title: 'Dominican Republic',
    img: '/assets/dominican.jpg'
  },

  {
    title: 'Bali, Indonesia',
    img: '/assets/bali.jpg'
  },

  {
    title: 'Cabo San Lucas, Mexico',
    img: '/assets/cabo.jpg'
  },

  {
    title: 'Aruba',
    img: '/assets/aruba.jpg'
  }
];

const MainDestinations = () => {
  const [count, setCount] = useState(0);
  let styles = { transform: `translate(calc(-${count}00% - ${count}0px))` };
  console.log(count);

  useEffect(() => count);
  const nextBtn = () => count < mainDestinations.length - 4 && setCount(count + 1);

  //I change the count based on arr.length

  const prevBtn = () => count > 0 && setCount(count - 1);

  return (
    <div className="destinationWrapper">
      <div onClick={prevBtn} className={count !== 0 ? 'nextButtonDestination' : 'hideDestinationBtn'}>
        <span className="destinationBtnIcon">&#10094;</span>
      </div>
      <ScrollContainer  className="destinationsGrid scroll-container">
        {mainDestinations.map((item, index) => (
          <figure style={styles} className="destinationItem" key={`${index}-${item.title}`}>
            <img className="imgDestination" src={item.img} alt={item.title} />
            <figcaption className="imgDestinationTitle">{item.title}</figcaption>
          </figure>
        ))}
      </ScrollContainer>
      <div onClick={nextBtn} className={count < mainDestinations.length - 4 ? 'prevButtonDestination' : 'hideDestinationBtn'}>
        <span className="destinationBtnIcon">&#10095;</span>
      </div>
    </div>
  );
};

export default MainDestinations;
