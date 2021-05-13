import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  return (
    <div className="dropShadow questionStyles border border-1">
      <div className='d-flex flex-row justify-content-between ps-3 pe-3'>
        <h3>{title}</h3>
        <button type="button" class="btn btn-primary">+</button>
      </div>
      <p className='p-3'>{info}</p>
    </div>
  );
};

export default Question;
