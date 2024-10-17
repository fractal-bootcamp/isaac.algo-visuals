import React, { useState } from 'react';
import LinearSearch from './LinearSearch';


const Searches: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="p-4">
            <select
                value={selectedOption}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
            >
                <option value="">Select an option</option>
                <option value="LinearSearch">LinearSearch</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="mt-2">
                {selectedOption === 'LinearSearch' && <LinearSearch />}
                {selectedOption === 'option2' && <p>Content for Option 2</p>}
                {selectedOption === 'option3' && <p>Content for Option 3</p>}
            </div>
        </div>
    )

}

export default Searches;