import React from 'react'
import { FaStar } from "react-icons/fa";

const Rates = ({inputValue}) => {
    let maxRating=11
    let stars=[]
    for (let i = 0; i < maxRating; i++) {
        if (i < inputValue) {
          stars.push(
            <FaStar  className="h-6 w-6 fill-current text-yellow-500"/>
          );
        } else {
          stars.push(
            <FaStar  className="h-6 w-6 fill-current text-gray-300"/>
          );
        }
      }
    
      return (
        <div className="flex items-center gap-2 space-x-1">
          {stars}
          <span className="text-white text-sm">{inputValue}/10</span>
        </div>
      );
    };
    

export default Rates