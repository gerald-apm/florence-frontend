import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../assets/images/img-9.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img5 from '../assets/images/img-8.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Dashboard Monitoring</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Ketinggian Air'
              
              path='/services'
            />
            <CardItem
              src={img2}
              text='Debit Air'
              
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img5}
              text='Status Pompa'
              
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
