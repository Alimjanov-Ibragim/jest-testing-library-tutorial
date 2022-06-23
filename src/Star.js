import React from 'react';
import { FaStar } from 'react-icons/fa';

export const Star = ({ selected = false }) => {
  return <FaStar color={selected ? 'red' : 'grey'} id="star" />;
};
