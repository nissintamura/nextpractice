'use client'
import React from 'react';

const Text = (props) => {
  return (
    <input type={props.type} value={props.value} onChange={props.onChange} className = "border-2 border-black p-2 rounded"/>
  );
};

export default Text;