import React from 'react';
import { FaStar } from 'react-icons/fa';

export const Star = ({ selected = false }) => {
  return (
    <>
      <h1>Great Star</h1>
      <FaStar data-testid="star" color={selected ? 'red' : 'grey'} id="star" />
    </>
  );
};
