import React, { useState } from 'react';


function LinearSearch() {

    const [message, setMessage] = useState("Hello!");
    const [demoArray, setDemoArray] = useState([5, 2, 1, 7, 14]);

    const handleClick = () => {
        // Now we need to start bubble sort
        // Our array will be the default useState array

        for (let i = 0; i < demoArray.length; i++) {
            // console.log(i);
        }

    };

    return (
        <>
            <h2>
                To start with bubble sort, lets make an array of unsorted integers.
            </h2>
            <div className="flex">
                <div className="w-12 h-12 border border-black p-5"> {demoArray[0]} </div>
                <div className="w-12 h-12 border border-black p-5"> {demoArray[1]} </div>
                <div className="w-12 h-12 border border-black p-5"> {demoArray[2]} </div>
                <div className="w-12 h-12 border border-black p-5"> {demoArray[3]} </div>
                <div className="w-12 h-12 border border-black p-5"> {demoArray[4]} </div>
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

export default LinearSearch;