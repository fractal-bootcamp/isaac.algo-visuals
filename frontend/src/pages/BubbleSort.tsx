import React, { useState } from 'react';
import { bubbleSortWithCallback2 } from '../BasicSorts';

function BubbleSort() {

    const [demoArray, setDemoArray] = useState([7, 2, 11, 9, 1, 6, 3, 5]);

    const handleClick = () => {
        bubbleSortWithCallback2(demoArray, (array) => {
            setDemoArray(array);
        });
    };

    return (
        <>
            <h2>
                To start with bubble sort, lets make an array of unsorted integers.
            </h2>
            <div className="flex"> {/* Instead of just listing them one by one, we can make them dynamically with .map */}
                {demoArray.map((item, index) => (
                    <div key={index} className="w-12 h-12 border border-black p-5 flex justify-center items-center">
                        {item}
                    </div>
                ))}
            </div>
            <h1 className="mb-4 text-gray-800">
                So, what is the essence of bubble sort? The premise is relatively simple.
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                    <li className="text-sm">
                        Compare two adjacent elements.
                    </li>
                    <li className="text-sm">
                        If they're out of order, swap them.
                    </li>
                    <li className="text-sm">
                        Move on to the next element, comparing the two.
                    </li>
                    <li className="text-sm">
                        Loop through the entire array as many times as needed to sort the entire array.
                    </li>
                </ul>
            </h1>
            <button onClick={handleClick} className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
                Press to get started
            </button>
        </>

    )
}

export default BubbleSort;




