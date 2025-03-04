'use client'
import React from 'react';
import { useState } from 'react';

const Button=(props)=>{

    return(
        <div>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={props.eventName}>{props.name}</button>
        </div>
    )
};

export default Button;