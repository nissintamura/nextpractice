'use client'
import React from 'react';

const Text = ({ type, value, onChange }) => {
  return (
    <input type={type} value={value} onChange={onChange} className = "text-black"/>
  );
};

export default Text;