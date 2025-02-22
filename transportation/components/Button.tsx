'use client'
import React from 'react';
import { useState } from 'react';

const Button=(props)=>{

    return(
        <div>
            <button className="text-gray-100" onClick={props.eventName}>{props.name}</button>
        </div>
    )
};

export default Button;